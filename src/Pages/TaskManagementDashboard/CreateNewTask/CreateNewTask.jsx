import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useMutation } from "@tanstack/react-query";

const CreateNewTask = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const { user } = useContext(AuthContext);
    console.log(user)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const { mutate } = useMutation({
        mutationKey: ['tasks'],
        mutationFn: (addingData) => {
            return axios.post('http://localhost:5000/alltasks', addingData, { withCredentials: true, })
        },
        onSuccess: () => {
            Swal.fire({
                title: "Successfully Created Task",
                icon: "success",
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "OK"
            }).then((result) => {
                if (result.isConfirmed) {
                    // navigate('/')
                    reset();
                }
            });
        }

    })

    const onSubmit = async (data) => {
        console.log(data)
       
        mutate({
            username: user.displayName,
            useremail: user.email,
            userimage: user.photoURL,
            uid: user.uid,
            tasktitle: data.tasktitle,
            description: data.description,
            deadline: data.deadline,
            prioroty: data.prioroty,
            status: 'todo'
        })


    }
    return (
        <div className=" mt-20 mb-20">
            <div className="w-[90vw] lg:w-[70vw] mx-auto">
                <h1 className="text-black text-center text-[2.5rem] font-semibold">Create New Task</h1>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <p className="text-[#444] mt-5 text-xl font-semibold">Task Title</p>

                    <input className="w-full mt-2 h-[3.5rem] text-gray-700 placeholder:text-[#A1A1A1] text-lg outline-none pl-[1.81rem] rounded-lg border-2 border-[#D0D0D0] bg-white" type="text" name="tasktitle" id="" placeholder="Enter Task Title" {...register("tasktitle", { required: true })} />
                    {errors.tasktitle && <span>This field is required</span>}
                    {/* Description input  */}

                    <p className="text-[#444] mt-5 text-xl font-semibold">Description</p>

                    <input className="w-full mt-2 h-[3.5rem] text-gray-700 placeholder:text-[#A1A1A1] text-lg outline-none pl-[1.81rem] rounded-lg border-2 border-[#D0D0D0] bg-white" type="text" name="description" id="" placeholder="Enter full Description" {...register("description", { required: true })} />
                    {errors.description && <span>This field is required</span>}

                    <p className="text-[#444] mt-5 text-xl font-semibold">Task Deadline</p>

                    <input className="w-full mt-2 h-[3.5rem] text-gray-700 placeholder:text-[#A1A1A1] text-lg outline-none pl-[1.81rem] rounded-lg border-2 border-[#D0D0D0] bg-white" type="date" name="deadline" id="" placeholder="Enter Task Deadline" {...register("deadline", { required: true })} />
                    {errors.deadline && <span>This field is required</span>}


                    <p className="text-[#444] mt-5 text-xl font-semibold">Choose Task Prioroty</p>

                    <select className="w-full mt-2 h-[3.5rem] text-gray-700 placeholder:text-[#A1A1A1] text-lg outline-none pl-[1.81rem] rounded-lg border-2 border-[#D0D0D0] bg-white" {...register("prioroty", { required: true })}>
                        <option value="">Select Prioroty</option>
                        <option value="Low">Low</option>
                        <option value="Moderate">Moderate</option>
                        <option value="High">High</option>

                    </select>








                    <input className="w-full mt-5 h-[3.5rem] btn btn-neutral border-none bg-[#8d4dbf] text-white text-xl font-bold" type="submit" id="" value="Create Task" />

                </form>
            </div>
        </div>
    );
};

export default CreateNewTask;