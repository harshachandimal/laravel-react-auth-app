import * as React from "react";
import AppRoutes from "./utilities/routers/AppRoutes.tsx";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
axios.defaults.withCredentials = true;
axios.defaults.headers.post["Content-Type"] = "application/json";

// Add a request interceptor
axios.interceptors.request.use((config)=> {

    const token = localStorage.getItem("token");
    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    }
        return config;
    },
    (error)=> {

        return Promise.reject(error);
    }

);


const App: React.FC = () => {


    return (
        <>
            <AppRoutes />
        </>
    );
};

export default App;
