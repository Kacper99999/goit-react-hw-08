import { useDispatch } from "react-redux";
import { register } from "../../redux/operations/auth.operations";
import { Formik, Form, Field, ErrorMessage } from 'formik'; 
import * as Yup from 'yup'; 
import css from "./RegisterForm.module.css"


export const RegisterForm = () => {
    const dispatch = useDispatch();

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Imię jest wymagane'),
        email: Yup.string().email('Nieprawidłowy format e-mail').required('E-mail jest wymagany'),
        password: Yup.string().min(6, 'Hasło musi mieć co najmniej 6 znaków').required('Hasło jest wymagane'),
    });

    return (
        <Formik
            initialValues={{ name: '', email: '', password: '' }} 
            validationSchema={validationSchema} 
            onSubmit={(values, { resetForm }) => {
                dispatch(register(values)); 
                resetForm(); 
            }}
        >
            {({ errors, touched }) => ( 
                <Form>
                    <label>
                        Name
                        <Field type="text" name="name" />
                        <ErrorMessage name="name" component="div" /> 
                    </label>
                    <label>
                        Email
                        <Field type="email" name="email" />
                        <ErrorMessage name="email" component="div" /> 
                    </label>
                    <label>
                        Password
                        <Field type="password" name="password" />
                        <ErrorMessage name="password" component="div" /> 
                    </label>
                    <button type="submit">Register</button>
                </Form>
            )}
        </Formik>
    );
};