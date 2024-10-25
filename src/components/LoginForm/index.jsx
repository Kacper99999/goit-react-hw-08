import { useDispatch } from "react-redux";
import { logIn } from "../../redux/operations/auth.operations";
import { Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup"; 

export const LoginForm = () => {

    const dispatch = useDispatch();
    const validationSchema = Yup.object({
        email: Yup.string()
        .required("Email jest wymagany"),
        password : Yup.string()
        .required("Hasło jest wymagane"),
    });

    return(
        <Formik
        initialValues={{email:"", password:""}}
        validationSchema={validationSchema}
        onSubmit={(values,{resetForm})=>{
            dispatch(logIn(values));
            resetForm();
        }}
        >
            {({isSubmitting}) =>(
                <Form>
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
                <button type="submit" disabled={isSubmitting}>Zaloguj się</button>
                
            </Form>
            )}
        </Formik>
    );
};