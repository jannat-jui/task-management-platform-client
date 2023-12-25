import { Link } from "react-router-dom";
import bannerImage from "../../../assets/banner.png"
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Banner = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className="flex flex-col-reverse lg:flex-row lg:h-[80vh] justify-between items-center px-[10%] mt-6 lg:mt-0">

            <div data-aos="flip-left"  data-aos-duration="1500">
                <h1 className="playfont  text-[2rem] md:text-[2.5rem] lg:text-[4rem] lg:leading-[4.5rem] lg:w-[40rem]">Effortless Task Management, Elevated Productivity</h1>
                <p className="mt-6 text-xl lg:w-[45rem]">Welcome to Task Management, where organizing your tasks becomes a seamless experience. Unlock the power of collaborative task management with intuitive features, real-time updates, and a user-friendly interface.</p>

                <Link to={user? '/dashboard/dashboardhome' : '/login'}><button className="capitalize w-[18rem] h-14 btn-secondary bg-[#8d4dbf] border-none rounded-lg text-white mt-8 text-xl">Lets Explore</button></Link>
            </div>

            <img data-aos="flip-right"  data-aos-duration="1500" className="w-[100vw] lg:w-[33rem] lg:h-[33rem] rounded-[33rem]" src={bannerImage} alt="" />
            
        </div>
    );
};

export default Banner;