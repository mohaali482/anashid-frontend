import { Route, Routes } from "react-router-dom";
import List from "../pages/home/List";
import HomeSharedLayout from "../pages/home/HomeSharedLayout";
import NasheedForm from "../pages/home/NasheedForm";
import Account from "../pages/home/Account";
import PageNotFound from "../pages/common/404";

const HomeRouter = () => {
    return (
        <Routes>
            <Route element={<HomeSharedLayout />}>
                <Route path="" index element={<List />} />
                <Route path="add" element={<NasheedForm />} />
                <Route path="edit/:id" element={<NasheedForm />} />
                <Route path="user" element={<Account />} />
                <Route path="*" element={<PageNotFound />} />
            </Route>
        </Routes>
    )
}

export default HomeRouter;