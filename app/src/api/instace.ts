import { SERVER_URL } from "../../constants/sercer";
import axios from "axios";

export const api = axios.create({
  baseURL: SERVER_URL,
});