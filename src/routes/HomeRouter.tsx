import { Route, Routes } from "react-router-dom";
import List from "../pages/home/List";
import HomeSharedLayout from "../pages/home/HomeSharedLayout";
import NasheedForm from "../pages/home/NasheedForm";
import Account from "../pages/home/Account";
import PageNotFound from "../pages/common/404";
import SavedNasheeds from "../pages/home/savedNasheeds";
import MyNasheeds from "../pages/home/myNasheeds";
import Detail from "../pages/home/Detail";

const HomeRouter = () => {
    return (
        <Routes>
            <Route element={<HomeSharedLayout />}>
                <Route path="" index element={<List />} />
                <Route path="add" element={<NasheedForm />} />
                <Route path="nasheeds/edit/:id" element={<NasheedForm />} />
                <Route path="nasheeds/:id" element={<Detail />} />
                <Route path="my-nasheeds" element={<MyNasheeds />} />
                <Route path="saved-nasheeds" element={<SavedNasheeds />} />
                <Route path="user" element={<Account />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}

export default HomeRouter;