import { useDispatch } from "react-redux";
import { logIn } from "../../redux/operations/auth.operations";
//import css from "./LoginForm.module";

export const LoginForm = () => {

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(
            logIn({
                email:form.elemetns.email.value,
                password:form.elemetns.password.value,
            }));
            form.reset();
    } 

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Email
                <input type="text" name="email" />
            </label>
            <label>
                Password
                <input type="text" name="password" />
            </label>
            <button type="submit">Log In</button>
        </form>
    );
};