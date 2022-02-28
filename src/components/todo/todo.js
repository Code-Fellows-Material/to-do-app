import React, { useEffect, useState, useContext } from 'react';
import useForm from '../../hooks/form.js';

import { v4 as uuid } from 'uuid';
import Header from '../Header/Header.jsx';
import Items from '../Items/Items.jsx';
import Form from '../Form/Form.jsx';

import { LoginContext } from '../../context/LoginContext';

const ToDo = () => {
  const login = useContext(LoginContext);
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit, handleSlide } = useForm(addItem);

  let emptyCheck = (item) => {
    if (!item.assignee) item.assignee = 'No Assignee';

    if (!item.difficulty) item.difficulty = 1;

    if (!item.text) item.text = 'Remember to fill in';
    return item;
  };

  async function addItem(item) {
    item = emptyCheck(item);
    item.id = uuid();
    item.complete = false;
    try {
      //post to DB
      const response = await fetch('http://localhost:3001/api/v2/todo', {
        method: 'post',
        body: JSON.stringify(item),
        headers: { 'Content-Type': 'application/json', "authorization": `Bearer ${login.user.token}` }
      });
      const data = await response.json();
      console.log('Response', data);

      setList((prevList) => [...prevList, item]);
    } catch (e) {
      console.log(e);
    }
  }

  async function deleteItem(id) {
    try {
      const response = await fetch(`http://localhost:3001/api/v2/todo/${id}`, {
        method: 'delete',
        headers: { "authorization": `Bearer ${login.user.token}` }
      });
      console.log('Response', response);
      const items = list.filter((item) => item.id !== id);
      setList(items);
    } catch (e) {
      console.log(e);
    }
  }

  async function toggleComplete(id) {
    try {
      let tempItem;
      const items = list.map((item) => {
        if (item.id == id) {
          item.complete = !item.complete;
          tempItem = item;
        }
        return item;
      });
      console.log('Yo0', tempItem.complete);

      const response = await fetch(`http://localhost:3001/api/v2/todo/${id}`, {
        method: 'put',
        body: JSON.stringify({ complete: tempItem.complete }),
        headers: { 'Content-Type': 'application/json',  "authorization": `Bearer ${login.user.token}` },
      });
      console.log(response);
      setList(items);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    let incompleteCount = list.filter((item) => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);

  //Get ToDos from DB
  useEffect(async () => {
    try {
      const response = await fetch('http://localhost:3001/api/v2/todo', {
        method: 'get',
        headers: { "authorization": `Bearer ${login.user.token}` }
      });
      let tempArr = [];
      const data = await response.json();
      data.forEach((todo) => {
        tempArr.push(todo);
      });

      console.log(tempArr);
      setList((prevList) => [...prevList, ...tempArr]);
    } catch (e) {
      console.log(e);
    }
  }, []);

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
        deleteItem={deleteItem}
      />
    </>
  );
};

export default ToDo;
