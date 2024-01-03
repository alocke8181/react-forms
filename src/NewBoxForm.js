import React, {useState} from "react";

const NewBoxForm = ({addBox}) =>{
    const [formData, setFormData] = useState({
        bgColor : '#000000',
        width : 0,
        height : 0
    })

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData((data) =>({
            ...data,
            [name]: value
        }));
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        addBox(formData.bgColor, formData.width, formData.height);
        setFormData({
            bgColor : '#000000',
            width : 0,
            height : 0
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="bgColor">Background Color</label>
            <input
                id="bgColor"
                type="color"
                name="bgColor"
                placeholder="#000000"
                value={formData.bgColor} 
                onChange={handleChange}
            />
            <label htmlFor="width">Width px</label>
            <input
                id="width"
                type="number"
                name="width"
                placeholder="100"
                value={formData.width}
                onChange={handleChange}
            />
            <label htmlFor="height">Height px</label>
            <input
                id="height"
                type="number"
                name="height"
                placeholder="100"
                value={formData.height}
                onChange={handleChange}
            />
            <button id="box-submit">Submit</button>
        </form>
    )
}

export default NewBoxForm;