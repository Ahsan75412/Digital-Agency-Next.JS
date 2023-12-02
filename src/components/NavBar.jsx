"use client"
import Link from "next/link";


const NavBar = () => {

    const navOptions = <>
        <li><Link href="/home"> Home </Link></li>
        <li><Link href="/team"> Team </Link></li>
        <li><Link href="/service"> Service </Link></li>
        <li><Link href="/projects"> Projects </Link></li>
        <li><Link href="/testimonials"> Testimonials </Link></li>
        <li className="btn btn-outline btn-sm"><Link href="/login">Login</Link></li>
        <li className="btn btn-sm ml-3 bg-[#20B15A] text-white"><Link href="/register">Register</Link></li>
    
    </>
    return (
        // max-w-screen-xl mx-auto
        <div className="navbar bg-[#D7F5DC]  max-w-screen-xl mx-auto"> 
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-semibold">
                        {navOptions}
                    
                    </ul>
                </div>
                <a className="font-bold text-xl">Digital<span className="text-[#F55F1D]">Agency</span></a>
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal px-1 font-semibold">
                    {navOptions}
                </ul>
            </div>
         
        </div>
    );
};

export default NavBar;