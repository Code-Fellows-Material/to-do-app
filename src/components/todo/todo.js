import React, { useEffect, useState, useReducer } from 'react';
import useForm from '../../hooks/form.js';

import { v4 as uuid } from 'uuid';
import Header from '../Header/Header.jsx';
import Items from '../Items/Items.jsx';
import Form from '../Form/Form.jsx';

const ToDo = () => {
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit, handleSlide } = useForm(addItem);

  let emptyCheck = (item) => {
    if(! item.assignee ) item.assignee = "No Assignee"

    if(! item.difficulty)  item.difficulty = 1;

    if(! item.text)  item.text = "Remember to fill in"
    return item
  };


  function addItem(item) {   
    
    item = emptyCheck(item)
    item.id = uuid();
    item.complete = false;
    setList(prevList => [...prevList, item]);

  }

  function deleteItem(id) {
    const items = list.filter((item) => item.id !== id);
    setList(items);
  }

  function toggleComplete(id) {
    console.log('togl id', id)
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
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleSlide={handleSlide}
      />
      <Items
        list={list}
        toggleComplete={toggleComplete}
        incomplete={incomplete}
      />
    </>
  );
};

export default ToDo;
