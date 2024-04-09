import { User } from "../../../types/types";
import { api } from "../instace";

export const getUser = async (id: string) => {
  const fetchFunc = await api.get<Array<User> | undefined>(`/?id=${id}`);
  return fetchFunc.data? fetchFunc.data[0] : undefined;
};
