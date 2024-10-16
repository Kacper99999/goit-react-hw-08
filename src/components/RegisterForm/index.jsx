import { useDispatch } from "react-redux";
import { register } from "../../redux/operations/auth.operations";
//import css from "./RegisterForm.module";

export const RegisterForm = () => {

     const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(register({
            name:form.elements.name.value,
            emial:form.elements.emial.value,
            password:form.elements.password.value,
        }));
        form.reset();
    };

    return(
        <form onSubmit = {handleSubmit}>
            <label>
                Name
                <input type="text" name="name" />
            </label>
            <label>
                Email
                <input type="text" name="emial" />
            </label>
            <label>
                Password
                <input type="text" name="password" />
            </label>
            <button type="submit">Register</button>
        </form>
    );
};