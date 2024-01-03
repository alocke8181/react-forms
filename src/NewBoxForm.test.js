import { render } from '@testing-library/react';
import NewBoxForm from './NewBoxForm';

const testAddBox = () =>{console.log('test')}

test('smoke',()=>{
    render(<NewBoxForm addBox={testAddBox} />)
})

test('snapshot',()=>{
    const {asFragment} = render(<NewBoxForm addBox={testAddBox} />)
    expect(asFragment()).toMatchSnapshot();
})