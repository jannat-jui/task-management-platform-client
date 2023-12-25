
import how from "../../../assets/how.gif"
const HowItWorks = () => {
    return (
        <div className="mb-20 lg:mx-[10%]">

            <h1 className="text-center font-bold text-3xl">Get more done with ClickUp tasks.</h1>
            <p className="mt-3 text-center">Plan, organize, and collaborate on any project with task management that can be customized for every need.</p>

            <img className="mt-8 text-center mx-auto" src={how} alt="" />
            
        </div>
    );
};

export default HowItWorks;