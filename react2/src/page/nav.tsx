import { NavLink } from "react-router";
export default function Page() {
    return <>
        <nav>
            <NavLink to="/">Home</NavLink>
            &nbsp;&nbsp;
            <NavLink to="/list" >list</NavLink>
            &nbsp;&nbsp;
            <NavLink to="/add" >add</NavLink>
            &nbsp;&nbsp;
            <NavLink to="/login" >login</NavLink>
        </nav>
    </>
}