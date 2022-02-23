import React from "react";
import { Button, Card, Elevation } from "@blueprintjs/core";

function Form({handleChange, handleSubmit}) {
  return (
    <div style={{    display: 'flex', justifyContent: 'center'}}>

    <Card style={{width: '1000px', margin: '30px'}} interactive={true} elevation={Elevation.TWO}>
      <form onSubmit={handleSubmit}>
        <h2>Add To Do Item</h2>

        <label>
          <span>To Do Item</span>
          <input
            onChange={handleChange}
            name="text"
            type="text"
            placeholder="Item Details"
            />
        </label>

        <label>
          <span>Assigned To</span>
          <input
            onChange={handleChange}
            name="assignee"
            type="text"
            placeholder="Assignee Name"
            />
        </label>

        <label>
          <span>Difficulty</span>
          <input
            onChange={handleChange}
            defaultValue={3}
            type="range"
            min={1}
            max={5}
            name="difficulty"
            />
        </label>

        <label>
          <button type="submit">Add Item</button>
        </label>
      </form>
    </Card>
            </div>
  );
}

export default Form;
