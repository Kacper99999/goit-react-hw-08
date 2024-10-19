import { useDispatch } from "react-redux";
import { logIn } from "../../redux/operations/auth.operations";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup"; 

export const LoginForm = () => {
    const dispatch = useDispatch();

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email("Niepoprawny adres e-mail")
            .required("Adres e-mail jest wymagany"),
        password: Yup.string()
            .min(6, "Hasło musi mieć co najmniej 6 znaków")
            .required("Hasło jest wymagane"),
    });

    const handleSubmit = (values, { resetForm }) => {
        dispatch(logIn(values));
        resetForm();
    };

    return (
        <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <Form>
                    <label>
                        Email
                        <Field type="text" name="email" />
                        <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
                    </label>
                    <label>
                        Hasło
                        <Field type="password" name="password" />
                        <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
                    </label>
                    <button type="submit" disabled={isSubmitting}>
                        Zaloguj się
                    </button>
                </Form>
            )}
        </Formik>
    );
};