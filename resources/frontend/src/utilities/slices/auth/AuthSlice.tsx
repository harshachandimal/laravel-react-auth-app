import { createSlice } from "@reduxjs/toolkit";
import type { IAuthInitialState, IAuthPayload } from "../../types/slices/authSlice";
import { UserSignIn } from "../../api/auth/UserSignIn.ts";


const initialState: IAuthInitialState = {
    token: "",
    user_id: "",
    isAuthenticated: false,
    isLoading: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(UserSignIn.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(
                UserSignIn.fulfilled,
                (state, {payload} ) => {
                    setPayloadValuesIntoStore(state,payload)
                },
            )

            .addCase(UserSignIn.rejected, (state) => {
                state.isAuthenticated = false;
                state.isLoading = false;
            });
    },
});

const setPayloadValuesIntoStore = (state : IAuthInitialState, payload: IAuthPayload) => {

    if(!payload){
        return;
    }
    state.token = payload.user_token;
    state.isAuthenticated = true;
    state.isLoading = false;
    state.user_id = payload.user_id;

}

export default authSlice.reducer;
