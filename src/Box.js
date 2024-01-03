import React from "react";

const Box = (props) =>{
    let {id,bgColor, width, height, removeBox} = props;

    const handleRemove = (e) =>{
        e.preventDefault();
        removeBox(id)
    }

    return (
        <div id={id} className='box' style={{backgroundColor : bgColor, width:`${width}px`, height : `${height}px`}}>
            <button className="box-remove-button" onClick={handleRemove}>X</button>
        </div>
    )

}

export default Box;