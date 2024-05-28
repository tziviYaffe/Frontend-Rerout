import { NavLink, Outlet } from "react-router-dom";
import MenuBar from "../components/menu-bar";


export default function MainLayout() {

    return (
        <div style={{ height: '100vh', width: '100vw' }}>
            <MenuBar />
            <Outlet />
            <footer>Footer</footer>
        </div>
    );
}
