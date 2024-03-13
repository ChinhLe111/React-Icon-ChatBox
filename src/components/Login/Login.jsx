import React, { useRef } from 'react';
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const username = useRef();
    const password = useRef();
    const navigate = useNavigate();

    // const getEmail = localStorage.getItem("username")
    // const getPassword = localStorage.getItem("password")

    const submit = () => {
        if (username.current.value == "chinhle" && password.current.value == "123") {
            localStorage.setItem("username", "chinhle")
            localStorage.setItem("password", "123")
            navigate("/home");
        }
    }

    return (
        <div className="flex justify-center items-center h-[50vh] mt-[20vh]">
            <div className="w-[550px] text-[white] shadow-[0_0_10px_rgba(0,0,0,1)] px-10 py-[30px] rounded-[10px] border-2 border-solid border-[rgba(255,255,255,0.2)] bg-transparent">
                <form >
                    <h1 className="text-[45px] text-center font-bold">Login</h1>
                    <div className="relative w-full h-[50px] mx-0 my-[30px]">
                        <input className="w-full h-full pl-5 pr-[45px] py-5 rounded-[40px] border-2 border-solid border-[rgba(255,255,255,0.2)] bg-transparent outline-none placeholder:text-[white]" type="text" ref={username} placeholder='Username' required />
                        <FaUser className="absolute -translate-y-2/4 text-base right-5 top-2/4" />
                    </div>
                    <div className="relative w-full h-[50px] mx-0 my-[30px]">
                        <input className="w-full h-full pl-5 pr-[45px] py-5 rounded-[40px] border-2 border-solid border-[rgba(255,255,255,0.2)] bg-transparent outline-none placeholder:text-[white]" type="password" ref={password} placeholder='Password' required />
                        <FaLock className="absolute -translate-y-2/4 text-base right-5 top-2/4" />
                    </div>
                    <div className="flex justify-between text-[14.5px] mt-[-15px] mb-[15px] mx-0">
                        <label><input className="accent-[white] mr-1" type="checkbox" /> Remember me</label>
                        <a className="hover:underline" href=''>Forgot password?</a>
                    </div>
                    <button className="w-full h-[45px] cursor-pointer shadow-[0_0_10px_rgba(0,0,0,1)] text-base font-bold text-[#333] rounded-[50px] border-[none] bg-white outline-none hover:text-[white] hover:bg-pink-300" type="button" onClick={submit}>LOGIN</button>
                    <div className="text-[14.5px] text-center mt-5">
                        <p>Dont't have an account? <a className="text-[white] no-underline font-semibold hover:underline" href="signup"> Register</a></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;
