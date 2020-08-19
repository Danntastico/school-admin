import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { startFetchAllItems } from "../store/middlewares";
import { List } from "../components/List";
import { Item } from "../components/Item";

export const ListOfItems = ({ openModal, PATH, DETAIL_PATH, isCourse }) => {
  const { data } = useSelector((state) => state[PATH]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startFetchAllItems(PATH));
  }, [PATH]);

  const fillData = isCourse
    ? data.map((items) => (
        <Item to={`detail/${items.id}`} key={items.id}>
          <p>{items["name"]}</p>
        </Item>
      ))
    : data.map((items) => (
        <Item to={`detail/${items.id}`} key={items.id}>
          <p>{items["firstName"]}</p>
        </Item>
      ));
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
