import task from "../../../assets/task.png"

const FeatureSection = () => {
    return (
        <div className="flex justify-between items-center mx-[10%] my-20">
            <section data-aos="flip-left"  data-aos-duration="1500" className="mt-8">
                <h2 className="text-3xl font-semibold text-[#444] mb-4">Who Can Benefit?</h2>
                <p className="text-gray-700 text-lg font-medium">
                    Our task management platform is designed to cater to a diverse range of professionals,
                    making it an invaluable tool for:
                </p>
                <ul className=" mt-2 ml-6">
                    <li>✔️ Developers looking to streamline project tasks</li>
                    <li>✔️ Corporate professionals managing team projects</li>
                    <li>✔️ Bankers organizing financial tasks and deadlines</li>
                </ul>
                <p className="text-gray-700 mt-4">
                    Regardless of your industry or role, Task Management Platform is here to enhance your task
                    management experience and boost productivity.
                </p>
            </section>

            <img data-aos="flip-right"  data-aos-duration="1500" className="w-[30%]" src={task} alt="" />

        </div>
    );
};

export default FeatureSection;