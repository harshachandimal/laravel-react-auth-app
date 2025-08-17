import React, { useState } from "react";
import { SignInForm } from "./SignInForm.tsx";
import type { ISignInState } from "../../utilities/types/SignIn";
import * as axios from "axios";

export const SignIn: React.FC = () => {
    const [SignDetails, setSignDetails] = useState<ISignInState>({
        email: "",
        password: "",
    });

    const handleInputField = (
        event: React.ChangeEvent<HTMLInputElement>,
    ): void => {
        const { name, value } = event.target;

        setSignDetails((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (event: React.FormEvent): Promise<void> => {
        event.preventDefault();

        //const response = await axios.post('http://127.0.0.1:8000/api/sign-in', SignDetails)



    };

    return (
        <SignInForm
            handleInputField={handleInputField}
            handleSubmit={handleSubmit}
        />
    );
};
