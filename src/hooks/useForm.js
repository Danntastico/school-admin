import { useDispatch } from "react-redux";
import { useEffect } from "react";

export const useForm = (deactivateForm, middlewareAction, ...args) => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(middlewareAction(args));
    deactivateForm();
  };

  return [handleSubmit];
};
