import { createReducer, on } from "@ngrx/store";
import { login, loginFailure, loginSuccess, register, registerFailure, registerSuccess } from "./auth.action";

export interface AuthState {
    user: any | null;
    loading: boolean;
    error: any;
}

 const initialState: AuthState = {
    user: null,
    loading: false,
    error: null
};

export const authReducer = createReducer(
    initialState,
    on(login, (state) => ({ ...state, loading: true, error: null })),
    on(loginSuccess, (state, { user }) => ({ ...state, user, loading: false })),
    on(loginFailure, (state, { error }) => ({ ...state, error, loading: false })),
    on(register, (state) => ({ ...state, loading: true, error: null })),
    on(registerSuccess, (state) => ({ ...state, loading: false })),
    on(registerFailure, (state, { error }) => ({ ...state, error, loading: false }))
);
