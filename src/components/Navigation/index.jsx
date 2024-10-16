import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks";
//import css from "./Navigation.module";

export const Navigation = () => {
    const { isLoggedIn } = useAuth();
    return(
        <nav>
            <NavLink to="/">
                Home
            </NavLink>
            {isLoggedIn && (<NavLink to = "/contacts">
            Contacts
            </NavLink>
        )}
        </nav>
    );
};