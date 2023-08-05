import { Route, Routes } from "react-router-dom"
import NasheedForm from "../pages/nasheeds/NasheedForm"
import Detail from "../pages/nasheeds/Detail"
import CommonLayout from "../layouts/CommonLayout"
import PageNotFound from "../pages/common/404"

const NasheedsRouter = () => {
    return (
        <Routes>
            <Route element={<CommonLayout />}>
                <Route path="add" element={<NasheedForm />} />
                <Route path="edit/:id" element={<NasheedForm />} />
                <Route path=":id" element={<Detail />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}

export default NasheedsRouter;