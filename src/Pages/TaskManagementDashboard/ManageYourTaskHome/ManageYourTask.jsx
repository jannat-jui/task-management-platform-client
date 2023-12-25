import { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import useTodo from "../../../Hooks/useTodo";
import ListTasks from "../../../Components/ListTasks/ListTasks";


const ManageYourTask = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [tasks, setTasks] = useState([]);
    const [todoData, todoDataPending, todoDataRefetch] = useTodo();
    console.log(todoData)

    
    return (
        <div>
            <DndProvider backend={HTML5Backend}>
                <div>
                    <ListTasks
                        tasks={todoData}
                        setTasks={setTasks}
                        todoDataRefetch={todoDataRefetch}
                    />
                </div>
            </DndProvider>

        </div>
    );
};

export default ManageYourTask;