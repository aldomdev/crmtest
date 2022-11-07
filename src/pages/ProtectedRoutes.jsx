import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
    const token = localStorage.getItem('authorization/token');
    const user = { loggedIn: token != null, token: token };
    console.log(token);
    return user && user.loggedIn;
}

const ProtectedRoutes = () => {
    const isAuth = useAuth();
    console.log('aca');
    return isAuth ? <Outlet/> : <Navigate to="/login" />
}

export default ProtectedRoutes;