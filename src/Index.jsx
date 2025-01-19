import { Outlet } from "react-router-dom";
import Navigation from "./modules/Navigation";
import Footer from "./modules/Footer";

export default function Index() {
    return (
        <>
            <Navigation />
            <Outlet />
            <Footer/>
        </>
    )
}