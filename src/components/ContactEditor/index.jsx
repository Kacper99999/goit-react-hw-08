import { useDispatch } from "react-redux";
import { useState } from "react";
import { addContact } from "../../redux/operations/contacts.operations";
//import css from "./ContactEditor.module";

export const ContactEditor = () => {
    const dispatch = useDispatch();
    const [values, setValues] = useState({name:"", number:""})

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(addContact(values));
         
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setValues((pre) => ({
            ...pre,
            [name]:value
        }))
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={values.name} onChange={handleChange}/>
            <input type="number" name="number" value={values.number} onChange={handleChange}/>
            <button>Add Contact</button>
        </form>
    );
};