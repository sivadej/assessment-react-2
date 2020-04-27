//TODO
//-form styling
//-form validation

import React, { useState } from 'react';
import SnackOrBoozeApi from "./Api";

const NewMenuItem = ({ category, title }) => {
  const [item, setItem] = useState({
    id: '',
    name: '',
    description: '',
    recipe: '',
    serve: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(item);
  };

  const addItem = async (item) => {
    console.log('adding item')
    console.log(item)
    let newItem = await SnackOrBoozeApi.addItem(item, category);
    console.log(`${newItem.id} added to menu!`)
    //redirect user to ?
  }

  return (
    <div>
      <h3>Add a New {title}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={item.id}
          onChange={(e) => setItem({ ...item, id: e.target.value })}
          placeholder='Item ID'
        />
        <input
          type='text'
          value={item.name}
          onChange={(e) => setItem({ ...item, name: e.target.value })}
          placeholder='Item Name'
        />
        <input
          type='text'
          value={item.description}
          onChange={(e) => setItem({ ...item, description: e.target.value })}
          placeholder='Description'
        />
        <input
          type='text'
          value={item.recipe}
          onChange={(e) => setItem({ ...item, recipe: e.target.value })}
          placeholder='Recipe'
        />
        <input
          type='text'
          value={item.serve}
          onChange={(e) => setItem({ ...item, serve: e.target.value })}
          placeholder='Serving Instructions'
        />
        <button>submit</button>
      </form>
    </div>
  );
};

export default NewMenuItem;
