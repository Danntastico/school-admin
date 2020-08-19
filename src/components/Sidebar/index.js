import React from "react";
import { MdHome, MdWork, MdLocalLibrary, MdLibraryBooks } from "react-icons/md";
import {
  HOME_PATH,
  TEACHER_PATH,
  STUDENT_PATH,
  COURSE_PATH,
} from "../../utils/constants";

import {
  SidebarContainer,
  NavList,
  ItemList,
  SidebarHeader,
  Title,
  SidebarFooter,
} from "./styles";

export const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <Title>SCHOOL Admin</Title>
      </SidebarHeader>
      <NavList>
        <ItemList to={HOME_PATH}>
          <MdHome />
          Home
        </ItemList>
        <ItemList to={TEACHER_PATH}>
          <MdWork />
          Teachers
        </ItemList>
        <ItemList to={STUDENT_PATH}>
          <MdLocalLibrary />
          Students
        </ItemList>
        <ItemList to={COURSE_PATH}>
          <MdLibraryBooks />
          courses
        </ItemList>
      </NavList>
      <SidebarFooter>
        <button>GENERATE REPORT</button>
      </SidebarFooter>
    </SidebarContainer>
  );
};
