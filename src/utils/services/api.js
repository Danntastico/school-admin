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

export const getItemById = async (itemType = "", id = 0) => {
  const url = `${BACKEND_URL}/api/${itemType}/${id}`;
  const apiInstance = await fetch(url, fetchParams);
  const data = await apiInstance.json();

  return data;
};

export const postItem = async (itemType = "", body) => {
  if (!body) {
    throw new Error("Must pass a body!");
  }
  try {
    const url = `${BACKEND_URL}/api/${itemType}/`;

    const params = {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const apiInstance = await fetch(url, params);
    const data = await apiInstance.json();

    return data;
  } catch (e) {
    console.Error(e);
  }
};
