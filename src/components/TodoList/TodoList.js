import React from "react";
import "./TodoList.scss";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = ({ todos, ...otherProps }) => (
  <ul className="list-group todo-list">
    {todos.map(item => (
      <TodoItem key={item.id} todoItem={item} {...otherProps} />
    ))}
  </ul>
);

export default TodoList;
