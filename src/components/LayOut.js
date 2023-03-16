import { Outlet } from "react-router-dom";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export const LayOut = () => {
    return(
        <>
            <Nav />
            <Outlet />
            <Footer />
        </>
    )
}