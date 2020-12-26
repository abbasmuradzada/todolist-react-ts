import React, { FormEvent, useContext } from "react";
import {
  Button,
  // Centered,
  EButtonType,
  EColor,
  EJustify,
  Flex,
  FormControl,
  Icon,
} from "@kbfront/kb-ui";
import { TodoContext } from "../context/TodoContext";

const AddTodo: React.FC = () => {
  const { saveTodo, todoText, todoId, onSetTodoText, inputRef } = useContext(
    TodoContext
  );

  const handleChange = (e: FormEvent<HTMLInputElement>): void => {
    onSetTodoText(e.currentTarget.value);
  };

  const onSaveTodo = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!todoText) return;

    saveTodo(todoText);
  };

  return (
    <>
      <form onSubmit={onSaveTodo} className="todo-form">
        <Flex justify={EJustify.C}>
          <FormControl
            placeholder="Add Todo"
            name="todo"
            onChange={handleChange}
            value={todoText}
            ref={inputRef}
          />
          <Button
            className="add"
            type={EButtonType.SUBMIT}
            color={todoId ? EColor.WARNING : EColor.DANGER_DARK}
          >
            <Icon
              path={todoId ? ["fas", "edit"] : ["fas", "plus-square"]}
              color={EColor.LIGHT}
            />
          </Button>
        </Flex>
      </form>
    </>
  );
};

export default AddTodo;
