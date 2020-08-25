import React from "react";
import { useNavigate } from "@reach/router";
import { List } from "../components/common/List";
import { Item } from "../components/common/Item";
import { useDispatch } from "react-redux";
import { startGetItemById } from "../store/middlewares";

export const ListOfItems = ({ data, PATH, openModal }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
