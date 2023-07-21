import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const toggleMenu = () => {
        document.getElementById("menu")?.classList.toggle("hidden");
    };
    return (
        <nav className="bg-white shadow-md flex items-end px-2 py-2">
            <Link to="/" className="font-bitter text-5xl flex-1 text-rose-500">
                Retail Shop System
            </Link>
            <button
                id="hamburger-button"
                className="md:hidden flex flex-col gap-1 "
                onClick={toggleMenu}
            >
                <div className="w-5 h-1 bg-black"></div>
                <div className="w-4 h-1 bg-black"></div>
                <div className="w-3 h-1 bg-black"></div>
            </button>
            <div
                id="menu"
                className="hidden w-2/3 h-2/3 absolute right-0 top-28 bg-gray-500 text-rose-500 z-10 font-bold"
            >
                <ul className="">
                    <li>
                        <NavLink to="/" className="font-bitter text-xl ">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/store" className="font-bitter text-xl ">
                            Store
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className="font-bitter text-xl ">
                            About
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className="hidden md:block">
                <ul className="flex gap-5">
                    <li>
                        <div className="border-2 border-rose-500 hover:border-black">
                            <NavLink
                                to="/"
                                className="font-bitter text-xl hover:text-rose-500"
                            >
                                Home
                            </NavLink>
                        </div>
                    </li>
                    <li>
                        <div className="border-2 border-rose-500 hover:border-black">
                            <NavLink
                                to="/store"
                                className="font-bitter text-xl hover:text-rose-500"
                            >
                                Store
                            </NavLink>
                        </div>
                    </li>
                    <li>
                        <div className="border-2 border-rose-500 hover:border-black">
                            <NavLink
                                to="/about"
                                className="font-bitter text-xl hover:text-rose-500"
                            >
                                About
                            </NavLink>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
