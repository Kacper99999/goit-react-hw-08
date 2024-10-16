import { useAuth } from "../../hooks";
import { Navigation } from "../Navigation";
import { AuthNav } from "../AuthNav";
import { UserMenu } from "../UserMenu";
//import css from "./AppBar.module";

export const AppBar = () => {
    const { isLoggedIn } = useAuth();
    return(
        <header>
        <Navigation/>
        { isLoggedIn ? <UserMenu/> : <AuthNav/>}
        </header>
    );
};