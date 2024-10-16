import { useDispatch } from "react-redux";
import { addContact } from "../../redux/operations/contacts.operations";
//import css from "./ContactEditor.module";

export const ContactEditor = () => {
    const dispatch = useDispatch();

    const handleSubmit = (e) =>{
        e.preventDefault();
        const form = e.currentTarget;
        const value = form.elements.text.value;
        if(value !== ""){
            dispatch(addContact(value));
            form.reset();
            return;
        }
    };

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" />
            <button>Add Contact</button>
        </form>
    );
};