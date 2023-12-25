
import { useEffect } from "react";
import Banner from "./Banner/Banner";
import FeatureSection from "./FeatureSection/FeatureSection";
import AOS from 'aos';
import 'aos/dist/aos.css';
import HowItWorks from "./HowItWorks/HowItWorks";

const Home = () => {
    useEffect(()=>{
        AOS.init();
    }, [])
    return (
        <div>
            <Banner/>
            <FeatureSection/>
            <HowItWorks/>
            
        </div>
    );
};

export default Home;