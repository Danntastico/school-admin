import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { STUDENT_PATH } from "../utils/constants";
import { startFetchAllItems } from "../store/middlewares";
import { List } from "../components/List";

export const ListOfItems = ({ openModal }) => {
  const { data } = useSelector((state) => state.students);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startFetchAllItems(STUDENT_PATH));
  }, []);

  return (
    <>
      <List
        title="Active Students"
        buttonLabel="Add New Student"
        handleAddItem={openModal}
      >
        {data.map((items) => (
          <div key={items.id}> {items.firstName} </div>
        ))}
      </List>
    </>
  );
};
