import { useAuth } from "../../hooks";
import { Navigation } from "../Navigation";
import { AuthNav } from "../AuthNav";
import { UserMenu } from "../UserMenu";
import css from "./AppBar.module.css";

export const AppBar = () => {
    const { isLoggedIn } = useAuth();
    return(
        <header className= {css.header}>
        <Navigation/>
        { isLoggedIn ? <UserMenu/> : <AuthNav/>}
        </header>
    );
};