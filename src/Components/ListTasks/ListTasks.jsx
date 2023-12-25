import { useEffect, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import Section from "./Section";

const ListTasks = ({ tasks, setTasks, todoDataRefetch }) => {
    const [todos, setTodos] = useState([]);
    const [inProgress, setInProgress] = useState([]);
    const [closed, setClosed] = useState([]);

    useEffect(() => {
        // Ensure tasks is an array before filtering
        if (Array.isArray(tasks)) {
            const fTodos = tasks.filter((task) => task.status === "todo");
            const fInProgress = tasks.filter((task) => task.status === "inprogress");
            const fClosed = tasks.filter((task) => task.status === "closed");

            setTodos(fTodos);
            setInProgress(fInProgress);
            setClosed(fClosed);
        }
    }, [tasks]);

    const statuses = ["todo", "inprogress", "closed"];
    return (
        <div className="flex flex-col md:flex-row gap-6">
            {statuses.map((status, index) => (
                <Section
                    key={index}
                    status={status}
                    tasks={tasks}
                    setTasks={setTasks}
                    todos={todos}
                    inProgress={inProgress}
                    closed={closed}
                    todoDataRefetch={todoDataRefetch}
                />
            ))}
        </div>
    );
};

export default ListTasks;