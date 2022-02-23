import React, { useEffect, useState } from "react";
import useForm from "../../hooks/form.js";

import { v4 as uuid } from "uuid";
import Header from "../Header/Header.jsx";
import Items from "../Items/Items.jsx";
import Form from "../Form/Form.jsx";

const ToDo = () => {
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem);

  function addItem(item) {
    console.log(item);
    item.id = uuid();
    console.log(item.id)
    item.complete = false;
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter((item) => item.id !== id);
    setList(items);
  }

  function toggleComplete(id) {
    const items = list.map((item) => {
      if (item.id == id) {
        item.complete = !item.complete;
      }
      return item;
    });

    setList(items);
  }

  useEffect(() => {
    let incompleteCount = list.filter((item) => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);

  return (
    <>
      <Header incomplete={incomplete} />
      <Form handleChange={handleChange} handleSubmit={handleSubmit} />
      <Items list={list} toggleComplete={toggleComplete} />
    </>
  );
};

export default ToDo;
