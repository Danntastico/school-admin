import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { startGetAllItems } from "../store/middlewares";
import { List } from "../components/List";
import { Item } from "../components/Item";
import Loader from "react-loader-spinner";

export const ListOfItems = ({ openModal, PATH, isCourse }) => {
  const { data } = useSelector((state) => state[PATH]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startGetAllItems(PATH));
  }, [PATH]);

  const fillData = isCourse
    ? data.map((items) => (
        <Item to={`detail/${items.id}`} key={items.id}>
          <p>{items["id"]}</p>
          <p>{items["name"]}</p>
          <p>{new Date(items["year"]).getFullYear()}</p>
        </Item>
      ))
    : data.map((items) => (
        <Item to={`detail/${items.id}`} key={items.id}>
          <p>{items["id"]}</p>
          <p>{items["firstName"]}</p>
          <p>{items["lastName"]}</p>
        </Item>
      ));

  return (
    <List
      title={`Active ${PATH}`}
      buttonLabel={`Add New ${PATH}`}
      handleAddItem={openModal}
    >
      {data.length === 0 ? (
        <Loader type="Puff" color="#00BFFF" height={80} width={80} />
      ) : (
        fillData
      )}
    </List>
  );
};
