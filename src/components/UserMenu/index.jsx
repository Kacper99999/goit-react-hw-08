import { useDispatch } from "react-redux";
import { logOut } from "../../redux/operations/auth.operations";
import { useAuth } from "../../hooks";
//import css from "./UserMenu.module";

export const UserMenu = () => {
    const { user } = useAuth();
    const dispatch = useDispatch();

    const handleLogOut = (e) => {
        e.preventDefault();
        dispatch(logOut());
    };

    return(
        <div>
            <p>Welcome {user.name}</p>
            <button onClick={handleLogOut}>Log Out</button>
        </div>

    )
}