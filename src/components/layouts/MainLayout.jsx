import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AppBar } from "../AppBar";
import { Suspense } from "react";

export const MainLayout = () => {
    return(
        <div>
            <AppBar/>
            <Suspense fallback={null}>
                <Outlet/>
            </Suspense>
            <Toaster position="top-right" reverseOrder={false}/>
        </div>
    );
};