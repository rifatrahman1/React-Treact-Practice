import logo from '../../assets/logo.svg'
import { useState } from "react";

const Navbar = () => {
    // return (
    //         <div className="flex items-center justify-between mt-8 px-4">
    //         {/* #6315ff */}
    //             <div className="flex items-center gap-4">
    //                 <img className="w-12 h-12" src={logo} alt="" />
    //                 <h2 className="text-3xl font-bold">Treact</h2>
    //             </div>
    //             <div className="flex items-center gap-10 font-bold">
    //                 <a className='hidden lg:flex' href="">About</a>
    //                 <a className='hidden lg:flex' href="">Blog</a>
    //                 <a className='hidden lg:flex' href="">Pricing</a>
    //                 <a className='hidden lg:flex' href="">Contact Us</a>
    //                 <a className='hidden lg:flex' href="">Login</a>
    //                 <a className="bg-[#6315ff] text-white px-7 py-2 rounded-lg" href="">Sign Up</a>
    //             </div>
    //         </div>
    // );

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="mt-8 lg:px-0 px-4">
            {/* Navbar */}
            <nav className=" flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <img className="w-12 h-12" src={logo} alt="" />
                    <h2 className="text-3xl font-bold">Treact</h2>
                </div>
                <button
                    onClick={toggleMenu}
                    className="lg:hidden bg-[#6315ff] text-white px-7 inter py-2 rounded-lg"
                >
                    {isMenuOpen ? "Close Menu" : "Open Menu"}
                </button>
                <ul
                    className={`hidden lg:flex items-center gap-10 font-bold inter ${isMenuOpen ? "flex" : ""
                        }`}
                >
                    <a href="">About</a>
                    <a href="">Blog</a>
                    <a href="">Pricing</a>
                    <a href="">Contact Us</a>
                    <a href="">Login</a>
                    <a className="bg-[#6315ff] text-white px-7 py-2 rounded-lg" href="">Sign Up</a>
                </ul>
            </nav>

            {/* Dropdown Menu for Mobile */}
            <div
                className={`lg:hidden transition-all duration-500 bg-gray-200 text-gray-800 mt-5 rounded-xl ${isMenuOpen ? "block" : "hidden"
                    }`}
            >
                <ul className="flex justify-evenly font-bold inter gap-2 p-4">
                    <li className="hover:text-purple-600 cursor-pointer">Home</li>
                    <li className="hover:text-purple-600 cursor-pointer">About</li>
                    <li className="hover:text-purple-600 cursor-pointer">Services</li>
                    <li className="hover:text-purple-600 cursor-pointer">Contact</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;