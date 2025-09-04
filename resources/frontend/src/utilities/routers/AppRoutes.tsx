import { Navigate, Route, Routes } from "react-router-dom";
import { SignIn } from "../../components/signIn/SignIn.tsx";
import { useSelector } from "react-redux";
import {checkUserAuthentication, checkUserRole, checkUserTokenNotEmpty} from "./CheckUserAuthentication.ts";
import Products from "../../components/products/Products.tsx";

interface RootState {
    auth: {
        isAuthenticated: boolean;
        user_id: string | null;
        token: string | null;
        user_role: number
    };
}

const AppRoutes: React.FC = () => {
    const { isAuthenticated, token , user_role } = useSelector(
        (state: RootState) => state.auth,
    );


    return (
        <Routes>
            <Route path="/" element={<SignIn />} />

            <Route
                path="/dashboard"
                element={
                    checkUserAuthentication(isAuthenticated) && checkUserTokenNotEmpty(token) && checkUserRole(user_role)? (
                        <Products />
                    ) : (
                        <Navigate to="/" replace />
                    )
                }
            />
        </Routes>
    );
};

export default AppRoutes;
