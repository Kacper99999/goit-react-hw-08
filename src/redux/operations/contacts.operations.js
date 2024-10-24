import { createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../lib/client";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchContacts",
    async(_,thunkAPI) => {
        try{
            const res = await client.get("/contacts");
            return res.data;
        }catch(error){
            return thunkAPI.rejectWithValue(error.message);
        }

    }
)

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async(contact,thunkAPI) => {
        try{
            const res = await client.post("/contacts",contact);
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
            const res = await client.delete(`/contacts/${contactId}`);
            return res.data;
        }catch(error){
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)