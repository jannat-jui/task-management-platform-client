import { NavLink, Outlet } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { FiLogOut } from "react-icons/fi";


const TaskManagementDashboard = () => {
    const { user, logOut } = useContext(AuthContext)
    const handlelogOut = () => {
        logOut()
    }
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    // console.log(user)
    return (
        <div className="mt-0 pt-0">
           
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content  flex flex-col">

                    <label htmlFor="my-drawer-2" className="btn btn-primary bg-[#8d4dbf] border-none drawer-button lg:hidden">Open Dashboard</label>
                    <Outlet></Outlet>


                </div>
                <div className="drawer-side mr-8">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay "></label>
                    <ul className="menu p-4 relative w-80 min-h-full text-base-content  bg-[#8d4dbf]">
                        <li><div className="flex flex-col gap-2 mb-5">
                            {
                                user?.photoURL ?
                                    <img className="w-[150px] h-[150px] rounded-[50%]" src={user?.photoURL} alt="" />
                                    :
                                    <img className="w-[150px] h-[150px] rounded-[50%]" src="https://i.ibb.co/HxyJjpB/png-transparent-male-man-person-business-avatar-icon.png"></img>
                            }

                            <h1 className="text-xl text-white font-bold">{user?.displayName}</h1>

                            <h1 className="text-xs text-white font-bold">{user?.email}</h1>



                        </div></li>
                        {/* Sidebar content here */}

                        <li><NavLink className="border-2 text-white font-bold hover:bg-black" to='/dashboard/dashboardhome'>Manage Your Task</NavLink></li>
                        <li><NavLink className="border-2 text-white font-bold mt-4 hover:bg-black" to='/dashboard/createnewtask'>Create New Task</NavLink></li>
                       

                        <hr className="my-20" />


                        <li><NavLink className="border-2 text-white font-bold hover:bg-black" to='/'>Home</NavLink></li>
                        <li><NavLink className="border-2 text-white font-bold mt-4 hover:bg-black" to='/about'>About</NavLink></li>

                        <div className="absolute bottom-10 left-8">
                            <NavLink onClick={handlelogOut} className="border-2 w-[10rem] btn btn-neutral bg-[#8d4dbf] flex items-center justify-center text-white text-lg font-bold mt-4 hover:bg-black" to='/'><FiLogOut/>Logout</NavLink>
                        </div>

                    </ul>



                </div>
            </div>



        </div>
    );
};

export default TaskManagementDashboard;