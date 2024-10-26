import { useDispatch } from "react-redux";
import { register } from "../../redux/operations/auth.operations";
import { Formik, Form, Field, ErrorMessage } from 'formik'; 
import * as Yup from 'yup'; 
import css from "./RegisterForm.module.css"


export const RegisterForm = () => {
    const dispatch = useDispatch();
    const validationSchema = Yup.object({
        name: Yup.string()
        .required("Imię jest wymagane"),
        email: Yup.string()
        .required("Email jest wymagany"),
        password : Yup.string()
        .required("Hasło jest wymagane"),
    });

    return(
        <Formik
        initialValues={{name:"", email:"", password:""}}
        validationSchema={validationSchema}
        onSubmit={(values,{resetForm})=>{
            dispatch(register(values));
            resetForm();
        }}
        >
            {({isSubmitting}) =>(
                <Form className={css.form}>
                <div>
                <label>Imię</label>
                <Field type="text" name="name" id="name"/>
                <ErrorMessage name="name" component={"div"} style={{color:"red"}}/>
                </div>
                <div>
                    <label>Email</label>
                    <Field type="email" name="email" id="email"/>
                    <ErrorMessage name="email" component={"div"} style={{color:"red"}}/>
                </div>
                <div>
                    <label>Hasło</label>
                    <Field type="password" name="password" id="password"/>
                    <ErrorMessage name="password" component={"div"} style={{color:"red"}}/>
                </div>
                <button type="submit" disabled={isSubmitting}>Zarejestruj się</button> 
            </Form>
            )}
        </Formik>
    );
};