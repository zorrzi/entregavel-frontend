import { createBrowserRouter } from "react-router-dom";
import { Login } from "./pages/user/login/login";
import userRoutes from './pages/user/routes';
import { Signup } from "./pages/user/singup/signup";

export const router = createBrowserRouter([
    ...userRoutes,
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/signup",
        element: <Signup />,
    }

]);

