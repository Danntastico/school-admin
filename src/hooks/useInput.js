import { useState } from "react";

export const useInput = (initialState = {}) => {
  const [state, setState] = useState(initialState);

  const handleInputChange = ({ target }) => {
    console.log(target);
    setState({
      ...state,
      [target.name]: target.value,
    });
  };

  const reset = () => {
    setState(initialState);
  };

  return [state, handleInputChange, reset, setState];
};
