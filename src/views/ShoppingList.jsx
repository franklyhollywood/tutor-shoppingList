import React from 'react';
import { ItemsList } from '../components/itemsList/ItemsList.jsx';
import { useReducer } from 'react';

// action == {type: 'add', itemName :"iffAdding", id: "new unique id" }

export function ShoppingList() {
  const reducer = (oldState, action) => {
    switch (action.type) {
      case 'add':
        // old list = the new item added
        return [...oldState, { name: action.itemName, id: action.id }];
        break;
      case 'edit':
        return [];
        break;
      case 'delete':
        break;
      case 'save':
        break;
      case 'checked':
        break;
    }
  };

  const initialState = [
    {
      id: 1,
      name: 'apple',
    },
    {
      id: 2,
      name: 'orange',
    },
    {
      id: 3,
      name: 'soda',
    },
  ];

  const [shoppingListState, dispatchFunction] = useReducer(
    reducer,
    initialState
  );

  const handleAddItem = () => {
    const theAction = {
      type: 'add',
      id: new Date().valueOf(),
      itemName: document.getElementById('inputItem').value,
    };
    dispatchFunction(theAction);
  };

  return (
    <>
      <input name="inputItem" id="inputItem"></input>
      <button id="addItemButton" onClick={handleAddItem}>
        Add
      </button>
      <ItemsList itemList={shoppingListState} />
    </>
  );
}
