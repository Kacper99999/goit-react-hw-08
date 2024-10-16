import { deleteContact } from "../../redux/operations/contacts.operations";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
//import css from "./Contact.module";

export const Contact = ({ id, value }) => {
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(deleteContact(id));
    };

    return(
        <div>
            <p>{value}</p>
            <button type="button" onClick={handleDelete}>Delete</button>
        </div>
    );
};

Contact.propTypes = {
    id : PropTypes.string,
    value : PropTypes.string,
};