export const get = (data, actionType) => ({
  type: actionType,
  payload: data,
});

export const post = (item, actionType) => ({
  type: actionType,
  payload: item,
});
