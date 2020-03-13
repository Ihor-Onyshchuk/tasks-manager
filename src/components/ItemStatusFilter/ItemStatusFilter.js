import React, { Component } from "react";
import "./ItemStatusFilter.scss";

const buttons = [
  { name: "all", label: "All" },
  { name: "active", label: "Active" },
  { name: "done", label: "Done" }
];

export default class ItemStatusFilter extends Component {
  render() {
    const { filter, onFilterChange } = this.props;

    const renderButtons = buttons.map(({ name, label }) => {
      const isActive = filter === name;
      const clazz = isActive ? "btn-info" : "btn-outline-secondary";

      return (
        <button
          key={name}
          type="button"
          className={`btn ${clazz}`}
          onClick={() => onFilterChange(name)}
        >
          {label}
        </button>
      );
    });
    return <div className="btn-group">{renderButtons}</div>;
  }
}
