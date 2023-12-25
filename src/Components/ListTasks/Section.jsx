import { useDrop } from "react-dnd";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Header from "./Header";
import Task from "./Task";


const Section = ({
    status,
    tasks,
    setTasks,
    todos,
    inProgress,
    closed,
    todoDataRefetch,
}) => {

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "task",
        drop: (item) => addItemToSection(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    let text = "Todo";
    let bg = `${isOver ? "bg-gray-300" : "bg-gray-500"}`;
    let tasksToMap = todos;

    if (status === "inprogress") {
        text = "Ongoing";
        bg = `${isOver ? "bg-[#8d4dbf]" : "bg-[#8d4dbf]"}`;
        tasksToMap = inProgress;
    }
    if (status === "closed") {
        text = "Complete";
        bg = `${isOver ? "bg-green-800" : "bg-green-500"}`;
        tasksToMap = closed;
    }

    const axiosPublic = useAxiosPublic();

    const addItemToSection = (id) => {
        axiosPublic
            .patch(`/alltasks/${id}`, { status })
            .then((response) => {
                // Handle success if needed
                // console.log(response.data);
            })
            .catch((error) => {
                // Handle error if needed
                // console.error(error);
            })
            .finally(() => {
                todoDataRefetch();
            });
    };
    return (
        <div ref={drop} className="w-full mt-5">
            <Header text={text} bg={bg} count={tasksToMap.length} />
            <div className="space-y-1">
                {tasksToMap?.map((task) => (
                    <Task
                        key={task.id}
                        task={task}
                        tasks={tasks}
                        setTasks={setTasks}
                        todoDataRefetch={todoDataRefetch}
                    />
                ))}
            </div>
        </div>
    );
};

export default Section;