import React from 'react'
import myImage from '../Assets/logo.png';
import { HiOutlineSearch } from "react-icons/hi";

import { useNavigate } from 'react-router-dom';

const Header = () => {
  // let user = JSON.parse(localStorage.getItem('user-infor'))
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.clear();
    navigate("/");

  }
  return (
    <React.Fragment>
      <nav className="p-2 bg-gradient-to-r from-slate-700 to-slate-800 h-14">
        <div className="float-left">
          <ul className="flex gap-5 text-center items-center">
            <li className="flex text-center items-center gap-2">
              <img className="w-[40px] h-[40px]" src={myImage} /><h1 className='text-white text-3xl font-semibold'>DPD</h1>
            </li>
            <li className='hover:text-black'>
              <h1 className="text-white font-semibold text-xl pl-40 hover:!text-red-500 cursor-pointer">Versenden</h1>
            </li>
            <li>
              <h1 className="text-white text-xl pl-3 hover:!text-red-500 cursor-pointer">Empfangen</h1>
            </li>
            <li>
              <h1 className="text-white text-xl pl-3 hover:!text-red-500 cursor-pointer">Retournieren</h1>
            </li>
            <li>
              <h1 className="text-white text-xl pl-3 hover:!text-red-500 cursor-pointer">myDPD</h1>
            </li>
          </ul>
        </div>
        <div className="float-right">
          <ul className="flex text-center items-center">
            <li className="flex text-center items-center gap-2 relative">
              <input className="w-full h-1 pl-5 pr-[45px] py-5 rounded-[40px] border-2 border-solid border-[rgba(255,255,255,0.2)] bg-transparent text-white outline-none placeholder:text-[white]" type="search" placeholder="Search" aria-label="Search" />
              <HiOutlineSearch className="absolute -translate-y-2/4 text-base right-5 top-2/4 text-white hover:!text-red-500 ; cursor-pointer" />
            </li>
            <li>
              <button onClick={logOut} className="w-full h-11 border-2 rounded-[40px] border-solid border-[rgba(255,255,255,0.2)] bg-transparent p-2 ml-2 text-white hover:bg-gray-400" type="submit">Logout</button>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  )
}

export default Header