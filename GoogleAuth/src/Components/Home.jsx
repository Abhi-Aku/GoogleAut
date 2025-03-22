import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex h-screen">
      <div className="bg-red-400 w-1/4 p-4 flex flex-col space-y-4">
        <NavLink to="/contact" className="text-white text-lg">Contact</NavLink>
        <NavLink to="/about" className="text-white text-lg">About</NavLink>
      </div>

      <div className="w-3/4 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;