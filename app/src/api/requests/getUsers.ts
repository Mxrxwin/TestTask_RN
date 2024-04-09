import { User } from "../../../types/types";
import { api } from "../instace";

export const getUsers = async () =>
  (await api.get<Array<User> | undefined>('')).data;  