import { Route, Routes } from "react-router-dom"
import CommonLayout from "../layouts/CommonLayout"
import PageNotFound from "../pages/common/404"
import Account from "../pages/Account"

const AccountsRouter = () => {
    return (
        <Routes>
            <Route element={<CommonLayout />}>
                <Route path="profile" element={<Account />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}

export default AccountsRouter;