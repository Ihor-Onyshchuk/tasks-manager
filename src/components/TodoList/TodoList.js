import React from "react";
import "./TodoList.scss";
import TodoListItem from "../TodoListItem/TodoListItem";

const TodoList = ({ todos, ...otherProps }) => (
  <ul className="list-group todo-list">
    {todos.map(item => (
      <TodoListItem key={item.id} todoItem={item} {...otherProps} />
    ))}
  </ul>
);

export default TodoList;
