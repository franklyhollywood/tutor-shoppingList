import React from 'react';
import { ItemsList } from '../components/itemsList/ItemsList.jsx';
import { useReducer } from 'react';

// action == {type: 'add', itemName :"iffAdding", id: "new unique id" }

export function ShoppingList() {
  const reducer = (oldState, action) => {
    let returnState = [...oldState];
    switch (action.type) {
      case 'add':
        // old list = the new item added
        return [
          ...oldState,
          { name: action.itemName, id: action.id, done: false, editing: false },
        ];
      case 'edit':
        return oldState.map((item) => {
          if (item.id === action.id) {
            item.editing = true;
          }
          return item;
        });
      case 'delete':
        // console.log('Inside reducer');
        // console.log('action.id = ', action.id);
        let retValue = oldState.filter((item) => item.id !== action.id);
        console.log(retValue);
        return retValue;
      case 'save':
        return oldState.map((i) => {
          if (i.id === action.id) {
            i.editing = false;
            i.name = action.newName;
          }
          return i;
        });
        break;
      case 'toggleChecked':
        // console.log('onToggleChecked', action, returnState);
        return returnState.map((i) => {
          if (i.id === action.id) {
            console.log('Before: ', i);
            i.done = !i.done;
            console.log('after:', i);
          }
          //   console.log(i);
          return i;
        });
      // console.log(x);
      // return x;
    }
  };

  const initialState = [
    {
      id: 1,
      name: 'apple',
      done: false,
      editing: false,
    },
    {
      id: 2,
      name: 'orange',
      done: false,
      editing: false,
    },
    {
      id: 3,
      name: 'soda',
      done: false,
      editing: false,
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
      done: false,
    };
    dispatchFunction(theAction);
  };

  const handlers = {
    onDeleted(itemID) {
      dispatchFunction({
        type: 'delete',
        id: itemID,
      });
    },
    onEdited(itemID) {
      dispatchFunction({ type: 'edit', id: itemID });
    }, //
    onSaved(itemID, newName) {
      dispatchFunction({ type: 'save', id: itemID, newName: newName });
    },
    onToggleChecked(itemID) {
      dispatchFunction({ type: 'toggleChecked', id: itemID });
    },
  };

  return (
    <>
      <input aria-label="inputItem" name="inputItem" id="inputItem"></input>
      <button id="addItemButton" onClick={handleAddItem}>
        Add
      </button>
      <ItemsList itemList={shoppingListState} handlers={handlers} />
    </>
  );
}
