
import React, { useState } from 'react'
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { FaEye } from "react-icons/fa";

const SignUp = () => {
  const [username, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [confirm_password, setConfirm_Password] = useState("")
  const navigate = useNavigate();

  function signUp() {
    if (password === confirm_password) {
      let item = { username, password, confirm_password }
    }

  }
  return (
    <div className="flex justify-center items-center h-[50vh] mt-[20vh]">
      <div className="w-[550px] text-[white] shadow-[0_0_10px_rgba(0,0,0,1)] px-10 py-[30px] rounded-[10px] border-2 border-solid border-[rgba(255,255,255,0.2)] bg-transparent">
        <form >
          <h1 className="text-[45px] text-center font-bold">Sign Up</h1>
          <div className="relative w-full h-[50px] mx-0 my-[30px]">
            <input className="w-full h-full pl-5 pr-[45px] py-5 rounded-[40px] border-2 border-solid border-[rgba(255,255,255,0.2)] bg-transparent outline-none placeholder:text-[white]" type="text" value={username} onChange={(e) => setUserName(e.target.value)} placeholder='Username' required />
            <FaUser className="absolute -translate-y-2/4 text-base right-5 top-2/4" />
          </div>
          <div className="relative w-full h-[50px] mx-0 my-[30px]">
            <input className="w-full h-full pl-5 pr-[45px] py-5 rounded-[40px] border-2 border-solid border-[rgba(255,255,255,0.2)] bg-transparent outline-none placeholder:text-[white]" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' required />
            <FaLock className="absolute -translate-y-2/4 text-base right-5 top-2/4" />
          </div>
          <div className="relative w-full h-[50px] mx-0 my-[30px]">
            <input className="w-full h-full pl-5 pr-[45px] py-5 rounded-[40px] border-2 border-solid border-[rgba(255,255,255,0.2)] bg-transparent outline-none placeholder:text-[white]" type="password" value={confirm_password} onChange={(e) => setConfirm_Password(e.target.value)} placeholder='Comfirm password' required />
            <FaEye className="absolute -translate-y-2/4 text-base right-5 top-2/4" />
          </div>
          <button className="w-full h-[45px] cursor-pointer shadow-[0_0_10px_rgba(0,0,0,1)] text-base font-bold text-[#333] rounded-[50px] border-[none] bg-white outline-none hover:text-[white] hover:bg-pink-300" type="button" onClick={signUp}>SIGN UP</button>
          <div className="text-[14.5px] text-center mt-5">
            <p>Have an account? <a className="text-[white] no-underline font-semibold hover:underline" href="" onClick={goToLogin}> Login</a></p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp