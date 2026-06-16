import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSettings } from "../../services/apiSettings";
import toast from "react-hot-toast";

export function useUpdateSetting() {
  const queryClient = useQueryClient();

  const { mutate: updateSettingMutate, isPending: isUpdating } = useMutation({
    mutationFn: updateSettings,
    onSuccess: () => {
      toast.success("Setting successfully upated");
      queryClient.invalidateQueries({
        queryKey: ["setting"],
      });
    },
    onError: (error) => {
      console.log(error);
      toast.error(error.message);
    },
  });
  return {
    updateSettingMutate,
    isUpdating,
  };
}
