import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "../operations/contacts.operations";
import { logOut } from "../operations/auth.operations";

const initialState = {
    contacts : [],
    isLoading : false,
    error : null,
}

const handlePending = (state) => {
    state.isLoading = true;
}

const handleRejected = (state, action) => {
    state.isLoading = false,
    state.error = action.payload
}

const contactsSlice = createSlice({
    name : "contacts",
    initialState,
    extraReducers: builder => {
        builder
        .addCase(fetchContacts.pending, handlePending)
        .addCase(fetchContacts.fulfilled, (state, action) => {
            state.contacts = action.payload;
            state.isLoading = false;
            state.error = null;
        })
        .addCase(fetchContacts.rejected, handleRejected)
        .addCase(addContact.pending,handlePending)
        .addCase(addContact.fulfilled, (state,action) => {
            state.contacts.push(action.payload)
            state.isLoading = false;
            state.error = null;
        })
        .addCase(addContact.rejected, handleRejected)
        .addCase(deleteContact.pending, handlePending)
        .addCase(deleteContact.fulfilled, (state, action) => {
            const index = state.contacts.findIndex(
                con => con.id === action.payload.id
            )
            state.contacts.splice(index, 1);
            state.isLoading = false;
            state.error = null;
        })
        .addCase(deleteContact, handleRejected)
        .addCase(logOut.fulfilled, (state) => {
            state.contacts = [];
            state.isLoading = false;
            state.error = null;
        })
    } 
});

export const contactsReducer = contactsSlice.reducer;