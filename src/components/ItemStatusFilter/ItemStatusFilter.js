import React, { Component } from "react";
import "./ItemStatusFilter.scss";

const buttons = [
  { name: "all", label: "All" },
  { name: "active", label: "Active" },
  { name: "done", label: "Done" }
];

export default class ItemStatusFilter extends Component {
  render() {
    const renderButtons = buttons.map(({ name, label }) => (
      <button key={name} type="button" className="btn btn-info">
        {label}
      </button>
    ));
    return <div className="btn-group">{renderButtons}</div>;
  }
}
