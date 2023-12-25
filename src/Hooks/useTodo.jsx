import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useTodo = () => {
  const { user, loading } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const { data: todoData = {}, isPending: todoDataPending, refetch: todoDataRefetch } = useQuery({
    queryKey: [user?.uid, "todoData"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosPublic.get(`/alltasks/${user?.uid}`);
      return res.data;
    },
  });
  return [todoData, todoDataPending, todoDataRefetch];
};

export default useTodo;