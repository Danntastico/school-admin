export const get = (data, actionType) => ({
  type: actionType,
  payload: data,
});

export const post = (item, actionType) => ({
  type: actionType,
  payload: item,
});

export const getId = (item, actionType) => ({
  type: actionType,
  payload: item,
});

export const put = (item, actionType) => ({
  type: actionType,
  payload: item,
});
