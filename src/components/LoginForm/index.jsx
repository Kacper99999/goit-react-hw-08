import { useDispatch } from "react-redux";
import { logIn } from "../../redux/operations/auth.operations";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup"; 
import { useState } from "react";

export const LoginForm = () => {
    const [values, setValues] = useState({email:"", password:""})
    const dispatch = useDispatch();



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
        dispatch(logIn(values));
    };

    const chandleChange = (e) => {
        const {name, value} = e.target;
        setValues({...values, [name]:value})
    }
    return (
        <form onSubmit={handleSubmit} >
            <input type="email" name="email" value={values.email} onChange={chandleChange}/>
            <input type="password" name="password" value={values.password} onChange={chandleChange}/>
            <button>LogIn</button>
        </form>
    );
};