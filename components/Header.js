import Image from "next/image";
import {
    SearchIcon,
    GlobeAltIcon,
    MenuIcon,
    UserCircleIcon,
    UsersIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

function Header() {
    const [searchInput, setSearchInput] = useState("");

    return (
        <header className="p-4 md:px-10 sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md">
            <div className="relative h-8 md:h-10 cursor-pointer my-auto">
                <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                />
            </div>
            <div className="flex items-center px-1 md:border-2 rounded-full focus-within:border-red-400">
                <input
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    className="flex-grow px-3 outline-none leading-none bg-transparent placeholder-gray-400 h-full"
                    type="text"
                    placeholder="Start your search..."
                    name="main-search"
                    id="main-search"
                />
                <SearchIcon className="hidden md:inline-flex h-8 flex-shrink-0 p-1.5 cursor-pointer bg-red-400 hover:bg-red-500 text-white rounded-full" />
            </div>
            <div className="flex items-center space-x-4 justify-end text-gray-500">
                <p className="cursor-pointer hidden md:inline">Become a Host</p>
                <GlobeAltIcon className="h-6 cursor-pointer" />
                <div className="flex space-x-2 border-2 p-2 rounded-full cursor-pointer">
                    <MenuIcon className="h-6" />
                    <UserCircleIcon className="h-6" />
                </div>
            </div>

            {searchInput && <h1>Hello</h1>}
        </header>
    );
}

export default Header;
