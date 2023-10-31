import Login from "../pages/auth/Login";
import Registration from "../pages/auth/Registration";

const AuthLayoutRoute = [
    {
        path: 'login',
        element: <Login/>
    },
    {
        path: 'registration',
        element: <Registration/>
    }
]

export default AuthLayoutRoute