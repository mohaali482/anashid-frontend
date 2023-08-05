import { Route, Routes } from "react-router-dom";
import List from "../pages/home/List";
import HomeSharedLayout from "../layouts/HomeSharedLayout";
import PageNotFound from "../pages/common/404";
import SavedNasheeds from "../pages/home/savedNasheeds";
import MyNasheeds from "../pages/home/myNasheeds";

const HomeRouter = () => {
    return (
        <Routes>
            <Route element={<HomeSharedLayout />}>
                <Route path="" index element={<List />} />
                <Route path="my-nasheeds" element={<MyNasheeds />} />
                <Route path="saved-nasheeds" element={<SavedNasheeds />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}

export default HomeRouter;