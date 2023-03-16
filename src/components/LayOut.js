import { Outlet } from "react-router-dom";

import { Header } from "./Header";
import { Footer } from "./Footer";

export const LayOut = () => {
    return(
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}