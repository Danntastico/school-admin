import React from "react";
import { TableDescription, TableContent } from "./styles";
import { Button } from "../Button";

export const Table = ({ headLabels = []) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            {
            headLabels.map(item => (
            <th key={item}>{item}</th>
            ) ) }
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>  
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
