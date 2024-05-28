import { NavLink } from "react-router-dom";
import AuthNavLink from "./AuthNavLink";


export default function NavBar() {

    return (
        <nav>
            <AuthNavLink to={'/reRouteSignIn'}>ReRouteSignIn</AuthNavLink>
            <NavLink to='/home'></NavLink>
        </nav>
    );
}
