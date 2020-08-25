import React from "react";
import { Header } from "./styles";
import { CsvReport } from "../../containers/CsvReport";

export const Headbar = ({ title }) => {
  return (
    <Header>
      <h3>{title}</h3>
      <CsvReport />
    </Header>
  );
};
