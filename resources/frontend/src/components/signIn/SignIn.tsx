import React, { useEffect, useState } from "react";
import { SignInForm } from "./SignInForm.tsx";
import type { ISignInState } from "../../utilities/types/SignIn/SignIn";
import { UserSignIn } from "../../utilities/api/auth/UserSignIn.ts";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../../store.tsx";
import type { RootState } from "@reduxjs/toolkit/query";
import { useNavigate } from "react-router-dom";

export const SignIn: React.FC = () => {
    const [SignDetails, setSignDetails] = useState<ISignInState>({
        email: "",
        password: "",
    });

    //need to define type definition for dispatching method
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const { isAuthenticated , user_role } = useSelector(
        (state: RootState) => state.auth,
    );
    useEffect(() => {
        if(isAuthenticated && user_role===1){

            navigate("/dashboard");


        }


    },[user_role,isAuthenticated,navigate]);



    const handleInputField = (
        event: React.ChangeEvent<HTMLInputElement>,
    ): void => {
        const { name, value } = event.target;

        setSignDetails((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (event: React.FormEvent)=> {
        event.preventDefault();

        await dispatch(UserSignIn({SignDetails}))
    };

    return (
        <SignInForm
            handleInputField={handleInputField}
            handleSubmit={handleSubmit}
        />
    );
};
