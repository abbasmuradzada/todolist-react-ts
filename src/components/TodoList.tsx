import React, { useContext } from "react";
import { EColor, ListGroup, Typography } from "@kbfront/kb-ui";

import TodoItem from "./TodoItem";
import { TodoContext } from "../context/TodoContext";

const TodoList: React.FC = () => {
  const { todos } = useContext(TodoContext);

  return (
    <>
      <Typography
        className="h1"
        component="h1"
        variant="1"
        color={EColor.DANGER}
      >
        Todo List
      </Typography>
      <ListGroup className="list">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ListGroup>
    </>
  );
};

export default TodoList;
