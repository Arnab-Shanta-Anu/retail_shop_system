import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md flex items-end px-2 py-2">
            <Link to="/" className="font-bitter text-5xl flex-1 text-rose-500">
                Retail Shop System
            </Link>
            <ul className="flex gap-5">
                <NavLink to="/" className="font-bitter text-xl">
                    Home
                </NavLink>
                <NavLink to="/store" className="font-bitter text-xl">
                    Store
                </NavLink>
                <NavLink to="/about" className="font-bitter text-xl">
                    About
                </NavLink>
            </ul>
        </nav>
    );
};

export default Navbar;
