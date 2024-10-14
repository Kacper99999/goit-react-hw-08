import { Helmet } from "react-helmet";
import { ContactEditor } from "../components/ContactEditor";
import { ContactList } from "../components/ContactsList";
import { selectLoading } from "../redux/selectors/contacts.selectors";
import { useSelector, useDispatch } from "react-redux";
import { fetchContacts } from "../redux/operations/contacts.operations";
import { useEffect } from "react";
 
export default function ContactsPage() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectLoading);

    useEffect(() => {
        dispatch(fetchContacts())
    },[dispatch])

    return(
        <div>
        <Helmet>
            <title>Your Contacts</title>
        </Helmet>
        <ContactEditor/>
        <div>{isLoading && "IS LOADING CONTACTS"}</div>
        <ContactList/>
        </div>
    );
};