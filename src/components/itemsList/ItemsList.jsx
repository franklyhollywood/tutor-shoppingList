import React from 'react';
import { Item } from '../item/Item';

export function ItemsList(props) {
  return (
    <div>
      {props.itemList.map((item) => (
        <Item itemName={item.name} key={item.id} />
      ))}
    </div>
  );
}
