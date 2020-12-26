import React, { useContext } from "react";

import {
  ListItem,
  Flex,
  Text,
  Tooltip,
  Button,
  Icon,
  EJustify,
  EFlexAlign,
  EColor,
  ETooltipPosition,
} from "@kbfront/kb-ui";
import { TodoContext } from "../context/TodoContext";

interface Props {
  todo: {
    id: number;
    text: string;
    completed: boolean;
  };
}

const TodoItem: React.FC<Props> = ({ todo }: Props) => {
  const { completeTodo, removeTodo, onSetTodoText, onSetTodoId } = useContext(
    TodoContext
  );

  const onUpdateTodo = (text: string, id: number) => {
    onSetTodoText(text);
    onSetTodoId(id);
  };

  return (
    <ListItem key={todo.id}>
      <Flex justify={EJustify.SB} align={EFlexAlign.C}>
        <Tooltip
          content="double click to complete"
          position={ETooltipPosition.RIGHT}
        >
          <div
            className="todo-text"
            onDoubleClick={() => {
              completeTodo(todo.id);
            }}
          >
            <Text
              fontSize={1.8}
              color={todo.completed ? EColor.SECONDARY : EColor.PRIMARY}
            >
              {todo.text}
            </Text>
          </div>
        </Tooltip>
        <div className="controls">
          <Button
            className="icon"
            onClick={(e) => onUpdateTodo(todo.text, todo.id)}
            color={EColor.WARNING}
          >
            <Icon path={["fas", "edit"]} color={EColor.LIGHT} />
          </Button>
          <Button
            className="icon"
            onClick={() => removeTodo(todo.id)}
            color={EColor.DANGER_LIGHT}
          >
            <Icon path={["fas", "trash-alt"]} color={EColor.LIGHT} />
          </Button>
        </div>
      </Flex>
    </ListItem>
  );
};

export default TodoItem;
