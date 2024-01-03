import { render } from '@testing-library/react';
import NewToDoForm from './NewToDoForm';

test('smoke',()=>{
    render(<NewToDoForm addTodo={console.log}/>)
})

test('snapshot',()=>{
    const {asFragment} = render(<NewToDoForm addTodo={console.log}/>)
    expect(asFragment()).toMatchSnapshot();
})