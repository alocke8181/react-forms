import React, {useState} from "react";

const NewToDoForm = ({addTodo})=>{
    const [formData, setFormData] = useState({text:""});

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData((data) =>({
            ...data,
            [name]: value
        }));
    };

    const handleSubmit = (e)=>{
        e.preventDefault();
        addTodo(formData.text);
        setFormData({text:""});
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="text">New Todo Item:</label>
            <input
                id="text"
                type="text"
                name="text"
                placeholder=""
                value={formData.text}
                onChange={handleChange}
            />
            <button id="todo-submit">Submit</button>
        </form>
    )

}

export default NewToDoForm