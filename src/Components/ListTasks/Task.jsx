import { useState } from "react";
import { useDrag } from "react-dnd";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";



const Task = ({ task, todoDataRefetch }) => {


    const [{ isDragging }, drag] = useDrag(() => ({
        type: "task",
        item: { id: task._id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    const axiosPublic = useAxiosPublic();

    const handleRemoveTask = (id) => {
        axiosPublic.delete(`/alltasks/${id}`)
            .then((res) => {
                console.log(res.data?.deletedCount);
                if (res.data?.deletedCount === 1) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Task Deleted Successfully",
                        showConfirmButton: false,
                        timer: 1500
                      });
                    todoDataRefetch();
                }
            });
    };
    return (
        <div>
            <div
                ref={drag}
                tabIndex={0}
                className='text-black border-2 p-2 rounded-lg shadow-md hover:shadow-2xl cursor-pointer'
            >
                <div className="font-bold text-lg">{task?.tasktitle} </div>
                <div className="">
                    <span className="font-semibold text-red-700">Deadline : {task?.deadline}</span>
                    <p className="text-sm mt-3">
                    {task?.description}
                    </p>
                </div>
                <div className="flex flex-wrap items-center gap-4 w-full mt-4">
                    
                <button
                    className="btn btn-sm btn-neutral bg-[#8d4dbf] text-white border-none"
                >{task?.prioroty}</button>
                <button
                    type="submit"
                    onClick={() => handleRemoveTask(task._id)}
                    className="btn btn-sm btn-neutral bg-[#8d4dbf] text-white border-none"
                >
                    <MdDeleteForever/> Delete
                </button>

                <Link to={`/dashboard/updatetask/${task?._id}`}>
                    <button
                        type="submit"
                        className="btn btn-sm btn-neutral bg-[#8d4dbf] text-white border-none"
                        data-tip="Edit"
                    >
                        <FaEdit/> Edit
                    </button>
                </Link>
                </div>
            </div>

        </div>
    );
};

export default Task;