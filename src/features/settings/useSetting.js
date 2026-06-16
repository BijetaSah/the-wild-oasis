import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";

export function useSetting() {
  const { data: setting, isLoading } = useQuery({
    queryKey: ["setting"],
    queryFn: getSettings,
  });
  return { setting, isLoading };
}
