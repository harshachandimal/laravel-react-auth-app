import React from "react";

export interface ISignInState {
    email: string;
    password: string;
}
export interface ISignInFormProp {
    handleInputField: (event: React.ChangeEvent<HTMLInputElement>) => void
    handleSubmit: () => Promise<void>
}
