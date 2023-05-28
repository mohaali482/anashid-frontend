import { Route, Routes, createBrowserRouter } from "react-router-dom";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import ForgotPassword from "../pages/auth/ForgotPassword";

const authRouter = createBrowserRouter([
    {
        path: '/',
        children: [
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'signup',
                element: <Signup />
            },
        ]
    }
])

const AuthRouter = () => {
    return (
        <Routes>
            <Route>
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Signup />} />
                <Route path="forgot-password" element={<ForgotPassword />} />
            </Route>
        </Routes>
    )
}

export default AuthRouter;