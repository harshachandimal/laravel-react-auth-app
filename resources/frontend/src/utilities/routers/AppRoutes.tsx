import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { SignIn } from "../../components/signIn/SignIn.tsx";
import { useSelector } from "react-redux";
import { checkUserAuthentication, checkUserTokenNotEmpty } from "./CheckUserAuthentication.ts";

interface RootState {
    auth: {
        isAuthenticated: boolean;
        user_id: string | null;
        token: string | null;
    };
}

const AppRoutes: React.FC = () => {
    const { isAuthenticated, token } = useSelector(
        (state: RootState) => state.auth,
    );

    return (
        <Routes>
            <Route path="/" element={<SignIn />} />

            <Route
                path="/dashboard"
                element={
                    checkUserAuthentication(isAuthenticated) && checkUserTokenNotEmpty(token) ? (
                        <div>Dashboard</div>
                    ) : (
                        <Navigate to="/" replace />
                    )
                }
            />
        </Routes>
    );
};

export default AppRoutes;
