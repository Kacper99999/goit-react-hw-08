import { deleteContact } from "../../redux/operations/contacts.operations";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import css from "./Contact.module.css";

export const Contact = ({ id, name, number }) => {
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(deleteContact(id));
    };

    return(
        <div className={css.div}>
            <p>{number} {name}</p>
            <button type="button" onClick={handleDelete}>Delete</button>
        </div>
    );
};

Contact.propTypes = {
    id : PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string
};