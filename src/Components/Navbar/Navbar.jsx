import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const { user, logOut } = useContext(AuthContext)
    const handlelogOut = () => {
        logOut()
    }

    return (
        <div className="lg:mx-[10%] mt-3">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div onClick={() => setOpen(!open)} tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ${open ? '' : 'hidden'}`}>
                        <li><NavLink className={({ isActive }) => isActive ? 'btn btn-neutral text-base border-none bg-[#8d4dbf] text-white' : 'text-lg font-medium btn bg-white border-none shadow-none'} to='/'>Home</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'btn btn-neutral text-base border-none bg-[#8d4dbf] text-white' : 'text-lg font-medium btn bg-white border-none shadow-none'} to='/about'>About</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'btn btn-neutral text-base border-none bg-[#8d4dbf] text-white' : 'text-lg font-medium btn bg-white border-none shadow-none'} to='/dashboard/dashboardhome'>Dashboard</NavLink></li>
                        </ul>
                    </div>
                    {/* logo and name of the website  */}
                    <div className="flex items-center gap-2">

                        <h1 className="text-2xl hidden lg:block font-bold">Task<span className="text-[#8d4dbf]">Management</span></h1>

                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" menu-horizontal px-1">
                        <li><NavLink className={({ isActive }) => isActive ? 'btn btn-neutral text-base border-none bg-[#8d4dbf] text-white' : 'text-lg font-medium btn bg-white border-none shadow-none'} to='/'>Home</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'btn btn-neutral text-base border-none bg-[#8d4dbf] text-white' : 'text-lg font-medium btn bg-white border-none shadow-none'} to='/about'>About</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'btn btn-neutral text-base border-none bg-[#8d4dbf] text-white' : 'text-lg font-medium btn bg-white border-none shadow-none'} to='/dashboard/dashboardhome'>Dashboard</NavLink></li>


                    </ul>
                </div>
                <div className="navbar-end">

                    {
                        user ? <div className="flex gap-4 items-center">
                            {user.photoURL ?  <img className="w-10 rounded-full" alt="Tailwind CSS Navbar component" src={user?.photoURL} />
                               :
                               <img className="w-10 rounded-full" alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />}

                            <Link to="/"><button onClick={handlelogOut} className="btn btn-outline border-[#8d4dbf] w-full text-lg">Logout</button></Link>
                        </div>


                            :

                            <div>
                                <Link to="/login"><button className="btn btn-outline border-[] lg:w-[6rem] text-lg border-2">Signin</button></Link>
                                <Link to="/signup"><button className="btn border-none bg-[#8d4dbf] lg:w-[6rem] text-lg text-white ml-4 btn-neutral">Register</button></Link>
                            </div>

                    }
                </div>

            </div >

        </div >
    );
};

export default Navbar;