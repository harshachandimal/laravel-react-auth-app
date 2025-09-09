import storage from 'redux-persist/lib/storage'
import { combineReducers, configureStore } from "@reduxjs/toolkit"; // defaults to localStorage for web
import { persistStore, persistReducer } from 'redux-persist'
import AuthReducer from "./utilities/slices/auth/AuthSlice.tsx";

const persistConfig ={
    key: 'root',
    storage,
    whitelist: ['auth'],
}

const rootReducer = combineReducers({
    auth: AuthReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => (
        getDefaultMiddleware({
            serializableCheck: false,
        })
    )
});

const persistor = persistStore(store)


// Type for the entire Redux state
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export { store, persistor };
