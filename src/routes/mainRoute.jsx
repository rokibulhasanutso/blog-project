import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayout from "../layouts/MainLayout";
import MainLayoutRoute from "./MainLayoutRoute";
import AuthLayout from "../layouts/AuthLayout";
import AuthLayoutRoute from "./AuthLayoutRoute";

const mainRoute = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/',
                element: <MainLayout/>,
                children: [...MainLayoutRoute]
            },
            {
                path: '/',
                element: <AuthLayout/>,
                children: [...AuthLayoutRoute]
            }
        ],
        errorElement: <div>Opps, Error page not found!</div>,
    }
])

export default mainRoute;