import { Route, Routes } from "react-router-dom"
import CommonLayout from "../layouts/CommonLayout"
import PageNotFound from "../pages/common/404"
import Account from "../pages/Account"
import ProtectedRoute from "./ProtectedRoute"
import ChangePassword from "../pages/Account/ChangePassword"

const AccountsRouter = () => {
    return (
        <Routes>
            <Route element={<CommonLayout />}>
                <Route path="profile" element={
                    <ProtectedRoute>
                        <Account />
                    </ProtectedRoute>
                } />
                <Route path="profile/change-password" element={
                    <ProtectedRoute>
                        <ChangePassword />
                    </ProtectedRoute>
                } />
            </Route>
            <Route path="*" element={
                <div style={{ marginTop: "5rem" }}>
                    <PageNotFound />
                </div>
            } />
        </Routes>
    )
}

export default AccountsRouter;