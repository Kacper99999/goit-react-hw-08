import { useSelector } from "react-redux";
import { selectAllContacts } from "../../redux/selectors/contacts.selectors";
import { Contact } from "../Contact";

export const ContactList = () => {
    const contacts = useSelector(selectAllContacts); 
    return(
        <ul>
            {contacts.map((id, con) => {
                <li key={id} >
                    <Contact id={id} contact={con}/>
                </li>
            })}
        </ul>
    );
};