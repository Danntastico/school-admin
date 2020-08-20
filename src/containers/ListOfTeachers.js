import React from "react";
import { TEACHER_PATH } from "../utils/constants";
import { List } from "../components/List";
import { Item } from "../components/Item";
import { useDispatch } from "react-redux";
import { startGetItemById } from "../store/middlewares";

export const ListOfTeachers = ({ data, openModal }) => {
  const dispatch = useDispatch();

  const handleClickTarget = (id) => {
    console.log("clicked");
    dispatch(startGetItemById(TEACHER_PATH, id));
  };

  return (
    <div>
      <List
        title={`Active ${TEACHER_PATH}`}
        buttonLabel={`Add New ${TEACHER_PATH}`}
        handleOnBtnClick={openModal}
      >
        {data.map((items) => (
          <Item
            onClick={() => handleClickTarget(items.id)}
            to={`detail/${items.id}`}
            key={items.id}
          >
            <p>{items["id"]}</p>
            <p>{items["firstName"]}</p>
            <p>{items["lastName"]}</p>
          </Item>
        ))}
      </List>
    </div>
  );
};
