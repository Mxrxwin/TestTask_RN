import { useQuery } from "@tanstack/react-query";
import { getUser } from "../requests/getUser";

export const fetchUserFunc = (id: string) => useQuery({
    queryKey: ["FetchUsers", id],
    queryFn: () => getUser(id),
  });