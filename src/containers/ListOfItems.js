import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { startFetchAllItems } from "../store/middlewares";
import { List } from "../components/List";

export const ListOfItems = ({ openModal, PATH, isCourse }) => {
  const { data } = useSelector((state) => state[PATH]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startFetchAllItems(PATH));
  }, [PATH]);

  const fillData = isCourse
    ? data.map((items) => <div key={items.id}> {items["name"]} </div>)
    : data.map((items) => <div key={items.id}>{items["firstName"]}</div>);
  return (
    <List
      title={`Active ${PATH}`}
      buttonLabel={`Add New ${PATH}`}
      handleAddItem={openModal}
    >
      {fillData}
    </List>
  );
};
