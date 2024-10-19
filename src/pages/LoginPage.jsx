import { Helmet, HelmetProvider } from "react-helmet-async";
import { LoginForm } from "../components/LoginForm"

export default function LoginPage() {
    return(
        <HelmetProvider>
            <div>
                <Helmet>
                    <title>Login</title>
                </Helmet>
                <LoginForm/>
            </div>
        </HelmetProvider>
    );
};