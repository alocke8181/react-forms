import React, {useState} from "react";
import Box from './Box';
import NewBoxForm from "./NewBoxForm";
import {v4 as uuid} from 'uuid';

const BoxList = () =>{
    let [boxes, setBoxes] = useState([]);

    const addBox = (bgColor, width, height) =>{
        setBoxes(boxes => [...boxes, {id:uuid(), bgColor, width, height}])
    }

    const removeBox = (boxID) =>{
        setBoxes(boxes => boxes.filter((box) => box.id != boxID));
    }

    return (
        <div>
            <NewBoxForm addBox = {addBox} />
            <div>
                {boxes.map((box) => <Box key={box.id} id={box.id} bgColor={box.bgColor} width={box.width} height={box.height} removeBox={removeBox}/>)}
            </div>
        </div>
    )

}
export default BoxList;