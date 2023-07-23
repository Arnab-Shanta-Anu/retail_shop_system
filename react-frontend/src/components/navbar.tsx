import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const toggleMenu = () => {
        document.getElementById("menu")?.classList.toggle("hidden");
    };
    return (
        <nav className="flex items-end bg-white px-2 py-2 shadow-md">
            <Link to="/" className="flex-1 font-bitter text-5xl text-rose-500">
                Retail Shop System
            </Link>
            <button
                className="flex flex-col gap-1 md:hidden"
                onClick={toggleMenu}
            >
                <div className="h-1 w-5 bg-black"></div>
                <div className="h-1 w-4 bg-black"></div>
                <div className="h-1 w-3 bg-black"></div>
            </button>
            <div
                id="menu"
                className="absolute right-0 top-28 z-10 hidden h-2/3 w-2/3 bg-gray-500 font-bold text-rose-500"
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
