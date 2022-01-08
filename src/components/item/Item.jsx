import React, { useState } from 'react';

import './Item.css';

export function Item(props) {
  const [itemName, setItemName] = useState(props.item.name);
  const [checked, setChecked] = useState(props.item.done);

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
        checked={checked}
        onChange={(e) => {
          e.preventDefault();
          handleCheckboxChanged();
          setChecked((oldState) => !oldState);
        }}
      />
      {/* className={props.item.done ? 'isDone' : ''} */}
      <span style={checked ? { textDecoration: 'line-through' } : {}}>
        {itemName}
      </span>
      <button
        aria-label={`edit${itemName}`}
        id="editItem"
        onClick={() => {
          props.handlers.onEdited(props.item.id);
        }}
      >
        Edit
      </button>
      <button
        aria-label={`delete${itemName}`}
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
        aria-label="editItem"
        type="text"
        value={itemName}
        id="newName"
        onChange={handleChange}
      />
      <input
        aria-label={`save${itemName}`}
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
