import axios, { type AxiosResponse } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import type { IUserSignInPayload } from "../../types/SignIn/SignIn";


export const UserSignIn = createAsyncThunk<AxiosResponse<Response> , IUserSignInPayload>(
    "auth/signIn",
    async ({ SignDetails: SignDetails }) => {
        return axios.get("/sanctum/csrf-cookie").then(async () => {
            try {
               const response = await axios.post("api/sign-in", SignDetails);
               if (response.status === 200) {
                   return response.data;
               }

            } catch (error) {
                console.log(error);
            }
        });
    },
);

