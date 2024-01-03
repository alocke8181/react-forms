import { render, fireEvent, screen, getByText } from '@testing-library/react';
import ToDoList from './ToDoList';

test('smoke',()=>{
    render(<ToDoList/>)
})

test('snapshot',()=>{
    const {asFragment} = render(<ToDoList/>)
    expect(asFragment()).toMatchSnapshot();
})

test('adding/removing todos', ()=>{
    const {container} = render(<ToDoList/>)
    const submitButton = container.querySelector('button[id="todo-submit"]');

    //expect the text field to be blank
    let todoBox = screen.getByLabelText("New Todo Item:").closest('input')
    expect(todoBox.value).toEqual('');

    //fill the form data
    fireEvent.change(todoBox, {target:{value:'test'}});

    //expect the form value to change
    todoBox = screen.getByLabelText("New Todo Item:").closest('input')
    expect(todoBox.value).toEqual('test');

    //submit
    fireEvent.click(submitButton);

    //check for the new item
    expect(container.querySelector('li[class="todo-item"]')).toBeInTheDocument();
    expect(getByText(container, 'test')).toBeInTheDocument();

    //check the form has reset
    todoBox = screen.getByLabelText("New Todo Item:").closest('input')
    expect(todoBox.value).toEqual('');

    //click the remove button
    const removeButton = container.querySelector('button[class="todo-remove-button"]');
    fireEvent.click(removeButton);

    //check the todo is gone
    expect(container.querySelector('li[class="todo-item"]')).not.toBeInTheDocument();
})