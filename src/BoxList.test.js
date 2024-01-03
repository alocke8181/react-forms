import { render, fireEvent, screen } from '@testing-library/react';
import BoxList from './BoxList';

test('smoke',()=>{
    render(<BoxList/>);
})

test('snapshot', ()=>{
    const {asFragment} = render(<BoxList/>);
    expect(asFragment()).toMatchSnapshot();
})

test('adding/removing boxes boxes',()=>{
    const {container} = render(<BoxList/>);

    const submitButton = container.querySelector('button[id="box-submit"]');

    //expect width/height to be empty and bgColor to be black
    let colorBox = screen.getByLabelText("Background Color").closest('input')
    expect(colorBox.value).toEqual('#000000');
    let widthBox = screen.getByLabelText("Width px").closest('input')
    expect(widthBox.value).toEqual('0');
    let heightBox = screen.getByLabelText("Height px").closest('input')
    expect(heightBox.value).toEqual('0');

    //fill the form data
    fireEvent.change(colorBox, {target:{value:'#ffffff'}});
    fireEvent.change(widthBox, {target:{value:100}});
    fireEvent.change(heightBox, {target:{value:100}});

    //expect the form values to have been changed
    colorBox = screen.getByLabelText("Background Color").closest('input')
    expect(colorBox.value).toEqual('#ffffff');
    widthBox = screen.getByLabelText("Width px").closest('input')
    expect(widthBox.value).toEqual('100');
    heightBox = screen.getByLabelText("Height px").closest('input')
    expect(heightBox.value).toEqual('100');

    //submit the form
    fireEvent.click(submitButton);

    //check for the box and that it is styled correctly
    expect(container.querySelector('div[class="box"]')).toBeInTheDocument();
    expect(container.querySelector('div[class="box"]')).toHaveStyle("background-color: #ffffff; width: 100px; height: 100px;");

    //expect the form to have reset
    colorBox = screen.getByLabelText("Background Color").closest('input')
    expect(colorBox.value).toEqual('#000000');
    widthBox = screen.getByLabelText("Width px").closest('input')
    expect(widthBox.value).toEqual('0');
    heightBox = screen.getByLabelText("Height px").closest('input')
    expect(heightBox.value).toEqual('0');

    //click the remove button
    const removeButton = container.querySelector('button[class="box-remove-button"]');
    fireEvent.click(removeButton);

    //check that the box is gone
    expect(container.querySelector('div[class="box"]')).not.toBeInTheDocument();


})