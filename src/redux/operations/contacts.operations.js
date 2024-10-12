import { createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../lib/client";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchContacts",
    async(_,thunkAPI) => {
        try{
            const res = client.get("/contacts");
            return res.data;
        }catch(error){
            return thunkAPI.rejectWithValue(error.message);
        }

    }
)

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async(text,thunkAPI) => {
        try{
            const res = client.post("/contacts",{text});
            return res.data;
        }catch(error){
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async(contactId, thunkAPI) => {
        try{
            const res = client.delete(`/contacts/${contactId}`);
            return res.data;
        }catch(error){
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)