import { BACKEND_URL } from "../constants";
import axios from "axios";

export const getAllStudents = async () => {
  const url = `${BACKEND_URL}/api/students`;

  const apiInstance = await fetch(url);

  return apiInstance;
};
