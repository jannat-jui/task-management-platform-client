import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
    return (
        <div>
            <ToastContainer />
            <Navbar/>
            <Outlet/>
            <Footer/>
            
        </div>
    );
};

export default Root;