import React from "react";
import { useDispatch } from "react-redux";
import { searchWidget } from "../store/widgetSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(searchWidget(e.target.value));
  };
  return (
    <nav className="bg-white p-2">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-blue-600 text-lg font-bold">Dashboard</div>
        <div className="relative text-gray-600 focus-within:text-gray-400">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35m1.9-6.65a7.5 7.5 0 1 0-15 0 7.5 7.5 0 0 0 15 0z"
              />
            </svg>
          </span>
          <input
            type="search"
            className="w-[500px] bg-gray-300 text-black rounded-full pl-10 pr-4 py-2 focus:outline-none"
            placeholder="Search Widgets..."
            onChange={handleSearch}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
