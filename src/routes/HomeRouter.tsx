import { Route, Routes } from "react-router-dom";
import List from "../pages/home/List";
import HomeSharedLayout from "../pages/home/HomeSharedLayout";
import CreateNasheed from "../pages/home/CreateNasheed";

const HomeRouter = () => {
    return (
        <Routes>
            <Route element={<HomeSharedLayout />}>
                <Route path="" index element={<List />} />
                <Route path="add" element={<CreateNasheed />} />
            </Route>
        </Routes>
    )
}

export default HomeRouter;