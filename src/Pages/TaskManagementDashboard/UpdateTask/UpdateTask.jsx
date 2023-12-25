import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useMutation, useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useNavigate, useParams } from "react-router-dom";

const UpdateTask = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [todoData, setTodoData] = useState({});
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const navigate = useNavigate()


    useEffect(() => {
        fetch(`https://task-management-platform-server-alpha.vercel.app/alltasks/todo/${id}`)
            .then(res => res.json())
            .then(data => setTodoData(data))
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const tasktitle = e.target.tasktitle.value;
        const description = e.target.description.value;
        const deadline = e.target.deadline.value;

        // console.log(tasktitle, description, deadline)
        const updateData = {
            tasktitle: tasktitle,
            description: description,
            deadline: deadline,
        }
        const updateRes = await axios.put(`https://task-management-platform-server-alpha.vercel.app/alltasks/v2/${id}`, updateData);
        console.log(updateRes.data)
        if (updateRes.data.modifiedCount > 0) {
            //
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Task Updated",
                showConfirmButton: false,
                timer: 1500
            });
            navigate('/dashboard/dashboardhome')
        }

    }

    return (
        <div className=" mt-20 mb-20">
            <div className="w-[90vw] lg:w-[70vw] mx-auto">
                <h1 className="text-black text-center text-[2.5rem] font-semibold">Update Task</h1>

                <form onSubmit={handleSubmit}>

                    <p className="text-[#444] mt-5 text-xl font-semibold">Task Title</p>

                    <input className="w-full mt-2 h-[3.5rem] text-gray-700 placeholder:text-[#A1A1A1] text-lg outline-none pl-[1.81rem] rounded-lg border-2 border-[#D0D0D0] bg-white" type="text" name="tasktitle" id="" placeholder="Task Title" defaultValue={todoData?.tasktitle} />



                    <p className="text-[#444] mt-5 text-xl font-semibold">Description</p>

                    <input className="w-full mt-2 h-[3.5rem] text-gray-700 placeholder:text-[#A1A1A1] text-lg outline-none pl-[1.81rem] rounded-lg border-2 border-[#D0D0D0] bg-white" type="text" name="description" id="" placeholder="Task description" defaultValue={todoData?.description} />


                    <p className="text-[#444] mt-5 text-xl font-semibold">Deadline</p>

                    <input className="w-full mt-2 h-[3.5rem] text-gray-700 placeholder:text-[#A1A1A1] text-lg outline-none pl-[1.81rem] rounded-lg border-2 border-[#D0D0D0] bg-white" type="date" name="deadline" id="" placeholder="Task deadline" defaultValue={todoData?.deadline} />


                    <input className="w-full mt-5 h-[3.5rem] btn btn-neutral border-none bg-[#8d4dbf] text-white text-xl font-bold" type="submit" id="" value="Update Tasks" />


                </form>

            </div>
        </div>
    );
};

export default UpdateTask;