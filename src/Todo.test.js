import { render } from '@testing-library/react';
import Todo from './Todo';

test('smoke',()=>{
    render(<Todo id={1} text={'test'} removeTodo={console.log} />)
})

test('snapshot',()=>{
    const {asFragment} = render(<Todo id={1} text={'test'} removeTodo={console.log} />)
    expect(asFragment()).toMatchSnapshot();
})
