import { Route, Routes } from "react-router-dom";
import AuthRouter from "./AuthRouter";
import HomeRouter from "./HomeRouter";
import NasheedsRouter from "./NasheedsRouter";
import AppLayout from "../layouts/AppLayout";
import AccountsRouter from "./AccountsRouter";

const Router = () => {
    return (
        <Routes>
            <Route path="/auth/*" element={<AuthRouter />} />
            <Route element={<AppLayout />}>
                <Route path="/accounts/*" element={<AccountsRouter />} />
                <Route path="/nasheeds/*" element={<NasheedsRouter />} />
                <Route path="/*" element={<HomeRouter />} />
            </Route>
        </Routes>
    )
}

export default Router;