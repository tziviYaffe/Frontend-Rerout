import { NavLink } from "react-router-dom";


export default function AuthNavLink({ children, to }) {

    const { isAthunticated } = useAuthContext()

    if (!isAthunticated) {
        return null
    }

    return (
        <NavLink to={to}>{children}</NavLink>
    );
}
