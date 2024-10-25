import { useDispatch } from "react-redux";
import { addContact } from "../../redux/operations/contacts.operations";
//import css from "./ContactEditor.module";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from 'yup';

export const ContactEditor = () => {
    const dispatch = useDispatch();
    const validationSchema = Yup.object({
        name: Yup.string()
        .required("Imie jest wymagane"),
        number : Yup.string()
        .matches(/^\d{9}$/,"Numer musi składac się z 9 cyfr")
        .required("Numer kontaktowy jest wymagany"),
    });

    return(
        <Formik
        initialValues={{name:"", number:""}}
        validationSchema={validationSchema}
        onSubmit={(values,{resetForm})=>{
            dispatch(addContact(values));
            resetForm();
        }}
        >
            {({isSubmitting}) =>(
                <Form>
                <div>
                    <label>name</label>
                    <Field type="name" name="name" id="name"/>
                    <ErrorMessage name="name" component={"div"} style={{color:"red"}}/>
                </div>
                <div>
                    <label>number</label>
                    <Field type="number" name="number" id="number"/>
                    <ErrorMessage name="number" component={"div"} style={{color:"red"}}/>
                </div>
                <button type="submit" disabled={isSubmitting}>Add contact</button>
                
            </Form>
            )}
        </Formik>
    );
};