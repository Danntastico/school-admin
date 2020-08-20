import React from "react";
import { STUDENT_PATH } from "../utils/constants";
import { Item } from "../components/Item";
import { List } from "../components/List";
import { useDispatch } from "react-redux";
import { startGetItemById } from "../store/middlewares";

export const ListOfStudents = ({ data, openModal }) => {
  const dispatch = useDispatch();

  const handleClickTarget = (id) => {
    console.log("clicked");
    dispatch(startGetItemById(STUDENT_PATH, id));
  };

  return (
    <div>
      <List
        title={`Active ${STUDENT_PATH}`}
        buttonLabel={`Add New ${STUDENT_PATH}`}
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
