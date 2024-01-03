import { render } from '@testing-library/react';
import Box from './Box';

const removeBoxTest = () => console.log('remove')

test('smoke', ()=>{
    render(<Box id={1} bgColor={'#000000'} width={100} height = {100} removeBox={removeBoxTest}/>)
})

test('snapshot',()=>{
    const {asFragment} = render(<Box id={1} bgColor={'#000000'} width={100} height = {100} removeBox={removeBoxTest}/>)
    expect(asFragment()).toMatchSnapshot();
})