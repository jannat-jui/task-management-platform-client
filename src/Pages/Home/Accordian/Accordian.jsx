

const Accordian = () => {
    return (
        <div className="flex flex-col justify-evenly lg:flex-row-reverse gap-20 items-center mx-[10%] my-20">
            <div>
                <h1 className=" font-medium text-[2rem] md:text-[2.5rem] lg:text-[3rem] lg:leading-[4.5rem] lg:w-[40rem]">The fastest way to get tasks out of your head.</h1>
                <p className="mt-6 text-xl lg:w-[45rem]">Type just about anything into the task field and Todoists one-of-its-kind natural language recognition will instantly fill your to-do list.</p>
            </div>

            <div className="w-full">
            <div className="collapse collapse-plus border-[#8d4dbf] border-2">
                <input type="radio" name="my-accordion-3" checked="checked" />
                <div className="collapse-title text-xl font-medium">
                How do I create a new task on the platform?
                </div>
                <div className="collapse-content">
                    <p>To create a new task, navigate to your dashboard and click on the Add Task button. Fill in the required details such as title, description, deadline, and priority using the user-friendly form. Once done, click Save to see your task added to the to-do list.</p>
                </div>
            </div>
            <div className="collapse collapse-plus border-[#8d4dbf] border-2 mt-4">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                Can I customize the priority levels of my tasks?
                </div>
                <div className="collapse-content">
                    <p>Absolutely! When adding or editing a task, you can choose from different priority levels such as Low, Moderate, or High. This helps you categorize and prioritize your tasks according to their importance.</p>
                </div>
            </div>
            <div className="collapse collapse-plus border-[#8d4dbf] border-2 mt-4">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                Is there a way to receive notifications for task updates?
                </div>
                <div className="collapse-content">
                    <p>Yes, we have implemented toast notifications to keep you informed about task assignments, updates, and approaching deadlines. Stay on top of your tasks with real-time notifications.</p>
                </div>
            </div>
            </div>

        </div>
    );
};

export default Accordian;