export interface IAuthInitialState {
    token: string,
    user_id: string,
    isAuthenticated: boolean
    isLoading: boolean
    user_role:number
}

export interface IAuthPayload {
    user_id: string;
    user_token: string;
    user_role: number;
}
