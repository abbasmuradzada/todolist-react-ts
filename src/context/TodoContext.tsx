import React from "react";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export interface ContextType {
  todos: Todo[];
  todoText: string;
  todoId: number | null;
  inputRef: any;
  completeTodo: (todoId: number) => void;
  saveTodo: (todotext: string) => void;
  removeTodo: (id: number) => void;
  onSetTodoText: (todoText: string) => void;
  onSetTodoId: (todoId: number) => void;
}

export const TodoContext = React.createContext<ContextType>({
  todos: [],
  todoText: "",
  todoId: null,
  inputRef: null,
  completeTodo() {},
  saveTodo() {},
  removeTodo() {},
  onSetTodoText() {},
  onSetTodoId() {},
});
