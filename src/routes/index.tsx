import { Route, Routes } from "react-router-dom";
import AuthRouter from "./AuthRouter";
import HomeRouter from "./HomeRouter";
HomeRouter: typeof Route

const Router = () => {
    return (
        <Routes>
            <Route path="/auth/*" element={<AuthRouter />} />
            <Route path="/*" element={<HomeRouter />} />
        </Routes>
    )
}

export default Router;