import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { startFetchAllItems } from "../store/middlewares";
import { List } from "../components/List";

export const ListOfItems = ({ openModal, PATH }) => {
  const { data } = useSelector((state) => state.students);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startFetchAllItems(PATH));
  }, [PATH]);
  console.log(PATH);

  return (
    <>
      <List
        title={`Active ${PATH}`}
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
