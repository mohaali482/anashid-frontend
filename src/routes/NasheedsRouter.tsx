import { Route, Routes } from "react-router-dom"
import NasheedForm from "../pages/nasheeds/NasheedForm"
import Detail from "../pages/nasheeds/Detail"
import CommonLayout from "../layouts/CommonLayout"
import PageNotFound from "../pages/common/404"
import ProtectedRoute from "./ProtectedRoute"

const NasheedsRouter = () => {
    return (
        <Routes>
            <Route element={<CommonLayout />}>
                <Route path="add" element={
                    <ProtectedRoute>
                        <NasheedForm />
                    </ProtectedRoute>
                } />
                <Route path="edit/:id" element={
                    <ProtectedRoute>
                        <NasheedForm />
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