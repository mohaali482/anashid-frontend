import { Route, Routes } from "react-router-dom";
import List from "../pages/home/List";
import HomeSharedLayout from "../pages/home/HomeSharedLayout";

const HomeRouter = () => {
    return (
        <Routes>
            <Route element={<HomeSharedLayout />}>
                <Route path="" index element={<List />} />
            </Route>
        </Routes>
    )
}

export default HomeRouter;