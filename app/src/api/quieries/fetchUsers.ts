import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../requests/getUsers";

export const fetchUsersFunc = () =>useQuery({
    queryKey: ["FetchUsers"],
    queryFn: getUsers,
  });