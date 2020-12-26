import React, { useRef, useState } from "react";
import { TodoContext } from "./context/TodoContext";
//types
import { Todo } from "./context/TodoContext";
//components
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { Container } from "@kbfront/kb-ui";

const todoList = [
  {
    id: 1,
    text: "todo1",
    completed: false,
  },
  {
    id: 2,
    text: "todo2",
    completed: true,
  },
];

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(todoList);

  const [todoText, setTodoText] = useState<string>("");
  const [todoId, setTodoId] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement>();
  const saveTodo = (todoText: string) => {
    if (todoId) {
      setTodos((prev) =>
        prev.map((todo) => {
          if (todo.id === todoId) {
            todo.text = todoText;
          }
          return todo;
        })
      );
    } else {
      const todo = {
        id: Math.random(),
        text: todoText,
        completed: false,
      };
      setTodos((prev) => [...prev, todo]);
    }

    setTodoId(null);
    setTodoText("");
  };

  const removeTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
    setTodoText("");
  };

  const onSetTodoText = (text: string) => {
    setTodoText(text);
    inputRef.current?.focus();
  };

  const onSetTodoId = (id: number) => {
    setTodoId(id);
  };

  const completeTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  return (
    <>
      <TodoContext.Provider
        value={{
          todos,
          todoText,
          todoId,
          inputRef,
          completeTodo,
          saveTodo,
          removeTodo,
          onSetTodoText,
          onSetTodoId,
        }}
      >
        <Container className="container">
          <AddTodo /> <TodoList />
        </Container>
      </TodoContext.Provider>
    </>
  );
};

export default App;
