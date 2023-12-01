import { ReactNode } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { Navigate } from "react-router-dom"

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
    const { isLoggedIn } = useSelector((state: RootState) => state.user)
    if (!isLoggedIn) {
        return <Navigate to={'/auth/login'} replace />
    }
    return <>{children}</>
}

export default ProtectedRoute;
