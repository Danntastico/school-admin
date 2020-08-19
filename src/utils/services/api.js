import { BACKEND_URL } from "../constants";

const fetchParams = {
  credentials: "omit",
};

export const getAllItems = async (itemType = "") => {
  const url = `${BACKEND_URL}/api/${itemType}`;
  const apiInstance = await fetch(url, fetchParams);
  const data = await apiInstance.json();

  return data;
};

export const getItemById = async (itemTpye = "", id = 0) => {
  const url = `${BACKEND_URL}/api/${itemTpye}/${id}`;
  const apiInstance = await fetch(url, fetchParams);
  const data = await apiInstance.json();

  return data;
};
