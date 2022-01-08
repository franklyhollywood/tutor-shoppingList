import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ShoppingList } from './ShoppingList';

it('should add an item', () => {
  render(<ShoppingList />);
  const inputArea = screen.getByLabelText(/inputItem/i);
  const addButton = screen.getByText(/add/i);

  userEvent.type(inputArea, 'coffee beans');
  userEvent.click(addButton);

  screen.getByText('coffee beans');
});

it('should edit an item', () => {
  render(<ShoppingList />);
  const apple = screen.findByText('apple');
  const editBtn = screen.getByLabelText('editapple');

  userEvent.click(editBtn);

  const editInput = screen.getByLabelText('editItem');
  const saveBtn = screen.getByLabelText('saveapple');

  userEvent.type(editInput, 'not apple');
  userEvent.click(saveBtn);

  screen.findByText('not apple');
  expect(apple).toBeNull;
});

it('should delete an item', () => {
  render(<ShoppingList />);
  const apple = screen.findByText('apple');
  const deleteBtn = screen.getByLabelText('deleteapple');
  userEvent.click(deleteBtn);
  expect(apple).toBeNull;
});
