import { Route, Routes } from "react-router-dom"
import Add from "../pages/nasheeds/Add"
import Edit from "../pages/nasheeds/Edit"
import Detail from "../pages/nasheeds/Detail"
import CommonLayout from "../layouts/CommonLayout"
import PageNotFound from "../pages/common/404"
import ProtectedRoute from "./ProtectedRoute"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"

const NasheedsRouter = () => {
    return (
        <Routes>
            <Route element={<CommonLayout />}>
                <Route path="add" element={
                    <ProtectedRoute>
                        <Add />
                    </ProtectedRoute>
                } />
                <Route path="edit/:id" element={
                    <ProtectedRoute>
                        <Edit />
                    </ProtectedRoute>
                } />
                <Route path=":id" element={<Detail />} />
            </Route>
            <Route path="*" element={
                <div style={{ marginTop: "5rem" }}>
                    <PageNotFound />
                </div>
            } />
        </Routes>
    )
}

export default NasheedsRouter;