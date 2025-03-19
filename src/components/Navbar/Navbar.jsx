import React from 'react';
import { TbCoin } from "react-icons/tb";

const Navbar = ({claimCredit}) => {
    return (
        <div className="navbar bg-base-100 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Home</a></li>
        <li><a>Picture</a></li>
        <li><a>Terms</a></li>
        <li><a>Schedules</a></li>
        
        
      </ul>
    </div>
    <a className="btn btn-ghost text-xl w-[70px]"><img src="/src/assets/logo.png" alt="" /></a>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><a>Home</a></li>
        <li><a>Picture</a></li>
        <li><a>Terms</a></li>
        <li><a>Schedules</a></li>
    </ul>
  </div>
  <div className="flex ml-4">
    <a className="btn">{claimCredit.toLocaleString()} Coin<TbCoin className='text-yellow-600'/></a>
  </div>
</div>
    );
};

export default Navbar;