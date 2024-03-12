import React from 'react'
import myImage from '../Assets/logo.png';


const Header = () => {

  const logOut = () => {
    sessionStorage.clear();
  }
  return (
    <React.Fragment>
      <nav className="p-2 bg-gradient-to-r from-slate-700 to-slate-800 h-14 ">
        <div className="float-left">
          <ul class="flex gap-5 text-center items-center">
            <li className="flex text-center items-center gap-2">
              <img className="w-[40px] h-[40px]" src={myImage} /><h1 className='text-white text-3xl font-semibold'>DPD</h1>
            </li>
            <li className='hover:text-black'>
              <h1 className="text-white font-semibold text-xl pl-3 hover:!text-red-500 cursor-pointer">Versenden</h1>
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
        <div className="float-right ">
          <form className="flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
            <button onClick={logOut} className="btn btn-outline-danger ml-2" type="submit">Logout</button>
          </form>
        </div>
      </nav>
    </React.Fragment>
  )
}

export default Header