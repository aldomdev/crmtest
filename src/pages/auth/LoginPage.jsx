import { Navigate } from "react-router-dom";
import FormikFormDemo from "./Login";

const useAuth = () => {
    const token = localStorage.getItem('authorization/token');
    const user = { loggedIn: token != null, token: token };
    return user && user.loggedIn;
}

export function LoginPage() {
    const isAuth = useAuth();
    return isAuth ? <Navigate to='/app/dashboard' /> : <FormikFormDemo></FormikFormDemo>
}