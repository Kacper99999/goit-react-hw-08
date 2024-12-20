import { configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
import storage from "redux-persist/lib/storage/session"
import { authReducer } from "../slices/auth.slice"
import { contactsReducer } from "../slices/contacts.slice";

const authPersistConfig = {
    key : "auth",
    storage,
    whitelist : ["token"],
};

export const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        contacts : contactsReducer,
    },
    middleware: getDefaultMiddleware => 
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        })
    })
    
export const persistor = persistStore(store);

