import { createAsyncThunk } from "@reduxjs/toolkit";
import { client , setAuthHeader , clearAuthHeader} from "../../lib/client";

export const register = createAsyncThunk(
    "auth/register",
    async(credentials, thunkAPI) => {
        try {
            console.log(credentials)
            const res = await client.post('users/signup', credentials);
            setAuthHeader(res.data.token);
            return res.data;
        }catch(error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const logIn = createAsyncThunk(
    "auth/logIn",
    async (credentials, thunkAPI) => {
        try {
            const res = client.post("users/login", credentials);
            setAuthHeader(await res.data.token);
            return (await res).data;
        }catch(error){
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const logOut = createAsyncThunk(
    "auth/logOut",
    async(_,thunkAPI) => {
        try{
            await client.post("users/logout");
            clearAuthHeader();
        }catch(error){
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const refreshUser = createAsyncThunk(
    "auth/refresh",
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;

        if(persistedToken === null){
            return thunkAPI.rejectWithValue("Unable to fetch user");
        }
        try{
            setAuthHeader(persistedToken);
            const res = await client.get("/users/current");
            return res.data;
        }catch(error){
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

  


