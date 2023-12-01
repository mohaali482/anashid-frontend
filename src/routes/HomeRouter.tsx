import { Route, Routes } from "react-router-dom";
import List from "../pages/home/List";
import HomeSharedLayout from "../layouts/HomeSharedLayout";
import PageNotFound from "../pages/common/404";
import SavedNasheeds from "../pages/home/savedNasheeds";
import MyNasheeds from "../pages/home/myNasheeds";
import ProtectedRoute from "./ProtectedRoute";

const HomeRouter = () => {
    return (
        <Routes>
            <Route element={<HomeSharedLayout />}>
                <Route path="" index element={<List />} />
                <Route path="my-nasheeds" element={
                    <ProtectedRoute>
                        <MyNasheeds />
                    </ProtectedRoute>
                } />
                < Route path="saved-nasheeds" element={
                    <ProtectedRoute>
                        <SavedNasheeds />
                    </ProtectedRoute>
                } />
            </Route >
            <Route path="*" element={
                <div style={{ marginTop: "5rem" }}>
                    <PageNotFound />
                </div>
            } />
        </Routes >
    )
}

export default HomeRouter;