import { Link } from "react-router-dom";
import { useState } from "react"
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { HiMenu, HiX } from "react-icons/hi";

type Subcategory = {
    name: string;
    path: string;
    subcategories?: subcategories[];
};

type NavItem = {
    name: string;
    path: string;
    subcategory?: Subcategory[];
};

type subcategories = {
    name: string;
    path: string;
}

const navItems: NavItem[] = [
    { name: "Home", path: "/" },
    { name: "Market Place", path: "/marketPlace" },
    { name: "About", path: "/workOnProgress" },
    {
        name: "Paas",
        path: "/paas",
        subcategory:
            [
                { name: "Track & Trace", path: "/workOnProgress" },
                { name: "Trade Finance", path: "/workOnProgress" },
                { name: "Insurance", path: "/workOnProgress" },
                { name: "Smart Declare", path: "/workOnProgress" },
                { name: "Consultation Services", path: "/workOnProgress" },
            ],
    },
    {
        name: "Trade Center",
        path: "/",
        subcategory: [
            { name: "TFP (ESWS)", path: "/workOnProgress" },
            { name: "iCMS", path: "/workOnProgress" },
            { name: "KPA (kwatos)", path: "/workOnProgress" },
            { name: "TI&AS", path: "/workOnProgress" },
            {
                name: 'PSC',
                path: "",
                subcategories: [
                    { name: 'Airport community', path: "/workOnProgress" },
                    { name: 'Port community', path: "/workOnProgress" },
                ]
            }

        ],
    }
]

const Navbar = () => {
    const [openSubcategories, setOpenSubcategories] = useState<{ [key: string]: boolean }>({});
    const [isOpen, setIsOpen] = useState(false);

    const toggleSubcategory = (name: string) => {
        setOpenSubcategories((prevState) => ({
            ...prevState,
            [name]: !prevState[name],
        }));
    };

    const renderSubcategories = (subcategories: Subcategory[]) => {
        return (

            <ul className=" bg-white rounded-lg px-4 py-2 absolute z-20 mt-2">

                {subcategories.map((subcategory, index) => (
                    <li key={index}
                        className="py-2  w-[9.375rem]  ">
                        <Link to={subcategory.path}>{subcategory.name}</Link>
                        {subcategory.subcategories && (
                            <>
                                <button onClick={() => toggleSubcategory(subcategory.name)}>
                                    {openSubcategories[subcategory.name] ? <RiArrowDropUpLine className="text-2xl text-gray-700 text-center" /> :
                                        <RiArrowDropDownLine className="text-2xl text-gray-700" />}
                                </button>
                                {openSubcategories[subcategory.name] && renderSubcategories(subcategory.subcategories)}
                            </>
                        )}
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <nav
            className=" fixed top-0 w-full  p-4 z-50 transition-shadow duration-300 bg-white flex items-center justify-between  
        ">
            <div className="flex max-w-7xl w-full mx-auto  justify-between items-center gap-6  ">
                <div className="">
                    <Link to="/" className="text-2xl font-bold text-black">
                        DLMP
                    </Link>
                </div>
                <div className=" hidden md:flex items-center">
                    <ul className="flex items-center justify-between gap-2  mx-5">
                        {navItems.map((item, index) => (
                            <li key={index} className="relative flex items-center " >
                                <Link to={item.path} className="text-gray-700 ">{item.name}</Link>
                                {item.subcategory && (
                                    <>
                                        <span className="flex items-center">
                                            <button onClick={() => toggleSubcategory(item.name)} >
                                                {openSubcategories[item.name] ? <RiArrowDropUpLine className="text-4xl  text-gray-700" /> : <RiArrowDropDownLine className="text-4xl text-gray-700" />}

                                            </button>
                                            {openSubcategories[item.name] && renderSubcategories(item.subcategory)}
                                        </span>
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>
                    <Link
                        to="auth/login"
                        className="hidden md:block bg-orange-500 text-white font-semibold py-2 px-4 text-xl rounded-lg shadow-md hover:bg-orange-600  transition duration-300 ease-in-out transform"
                    >
                        Get Started
                    </Link>
                </div>
            </div>

            <div className="md:hidden relative">
                <button
                    className="text-gray-600 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
                </button>
            </div>

            {isOpen && (
                <div className=" absolute left-1/2 transform -translate-x-1/2 top-0 mt-2 w-[300px] flex items-center bg-slate-300 rounded-md shadow-lg z-10">

                    <div className="flex flex-col items-center my-1 mx-auto">
                        <ul className="flex items-center flex-col gap-1  mx-4">
                            {navItems.map((item, index) => (
                                <li key={index} className="relative" >
                                    <Link to={item.path} className="text-gray-700 ">{item.name}</Link>
                                    {item.subcategory && (
                                        <>
                                            <button onClick={() => toggleSubcategory(item.name)} >
                                                {openSubcategories[item.name] ? <RiArrowDropUpLine className="text-2xl text-gray-700" /> : <RiArrowDropDownLine className="text-2xl text-gray-700" />}

                                            </button>
                                            {openSubcategories[item.name] && renderSubcategories(item.subcategory)}
                                        </>
                                    )}
                                </li>
                            ))}
                        </ul>
                        <Link
                            to="auth/login"
                            className=" bg-orange-500 text-white font-semibold py-2 px-4 text-xl rounded-lg shadow-md hover:bg-orange-600  transition duration-300 ease-in-out transform"
                        >
                            Get Started
                        </Link>
                    </div>

                </div>
            )
            }

        </nav>

    )
}
export default Navbar;