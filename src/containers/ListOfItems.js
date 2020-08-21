import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "@reach/router";

import { startGetItemById } from "../store/middlewares";
import { List } from "../components/List";
import { Item } from "../components/Item";

export const ListOfItems = ({ data, PATH, openModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClickTarget = (id) => {
    dispatch(startGetItemById(PATH, id));
    navigate(`${PATH}/detail/${id}`);
  };

  const fillData = () => {
    switch (PATH) {
      case "courses":
        return data.map((items) => (
          <Item
            to={`detail/${items.id}`}
            key={items.id}
            onClick={() => handleClickTarget(items.id)}
          >
            <p>{items["id"]}</p>
            <p>{items["name"]}</p>
            <p>{new Date(items["year"]).getFullYear()}</p>
          </Item>
        ));
      default:
        return data.map((items) => (
          <Item
            to={`detail/${items.id}`}
            key={items.id}
            onClick={() => handleClickTarget(items.id)}
          >
            <p>{items["id"]}</p>
            <p>{items["firstName"]}</p>
            <p>{items["lastName"]}</p>
          </Item>
        ));
    }
  };

  return (
    <List
      title={`Active ${PATH}`}
      buttonLabel={`Add New ${PATH}`}
      handleOnBtnClick={openModal}
    >
      {fillData()}
    </List>
  );
};
