import React, { useState } from 'react';

import './Item.css';

export function Item(props) {
  const [itemName, setItemName] = useState(props.item.name);
  //   const [checked, setChecked] = useState(props.item.done);

  const handleChange = (e) => {
    setItemName(e.target.value);
  };
  const handleCheckboxChanged = (e) => {
    props.handlers.onToggleChecked(props.item.id);
  };

  const whileNotEditing = (
    <div>
      <input
        type="checkbox"
        checked={props.item.done}
        onChange={handleCheckboxChanged}
      />
      {/* className={props.item.done ? 'isDone' : ''} */}
      <span style={props.item.done ? { textDecoration: 'line-through' } : {}}>
        {itemName}
      </span>
      <button
        id="editItem"
        onClick={() => {
          props.handlers.onEdited(props.item.id);
        }}
      >
        Edit
      </button>
      <button
        id="deleteItem"
        onClick={() => {
          console.log('inside onclick of delete button.');
          props.handlers.onDeleted(props.item.id);
        }}
      >
        Delete
      </button>
    </div>
  );
  const whileEditing = (
    <div>
      <input
        type="text"
        value={itemName}
        id="newName"
        onChange={handleChange}
      />
      <input
        type="button"
        id="saveButton"
        onClick={() => {
          props.handlers.onSaved(props.item.id, newName.value);
        }}
        value="Save"
      />
    </div>
  );
  return props.item.editing ? whileEditing : whileNotEditing;
}
