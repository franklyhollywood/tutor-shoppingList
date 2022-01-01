import React from 'react';

export function Item(props) {
  return (
    <div>
      <input type="checkbox"></input>
      {props.itemName}
      <button id="editItem">Edit</button>
      <button id="deleteItem">Delete</button>
    </div>
  );
}
