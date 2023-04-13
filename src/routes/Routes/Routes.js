import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Home from "../../pages/Home/Home";
import Register from "../../pages/LogIn/Register";
import LogIn from "../../pages/LogIn/LogIn";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: 'login',
                element: <LogIn />
            }
        ]
    }
]);