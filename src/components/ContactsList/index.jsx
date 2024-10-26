import { useSelector, useDispatch} from "react-redux";
import { selectContacts } from "../../redux/selectors/contacts.selectors";
import { Contact } from "../Contact";
import { fetchContacts } from "../../redux/operations/contacts.operations";
import { useEffect } from "react";


export const ContactList = () => {

    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts); 
    console.log(contacts);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);


    return(
        <ul>
            {contacts.map(({id,name,number}) => (
                <li key={id} >
                    <Contact id={id} name={name} number={number}/>
                </li>
            ))}
        </ul>
    );
};
