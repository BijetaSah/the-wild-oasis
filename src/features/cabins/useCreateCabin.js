import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUpdateCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useCreateCabin() {
  const queryClient = useQueryClient();
  const { mutate: createNewCabin, isPending: isCreating } = useMutation({
    mutationFn: (newCabinData) => createUpdateCabin(newCabinData),
    onSuccess: () => {
      toast.success("Cabin is successfully created");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });
  return {
    isCreating,
    createNewCabin,
  };
}
