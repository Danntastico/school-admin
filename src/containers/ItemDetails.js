import React from "react";
import { InformationCard } from "../components/InformationCard";

export const ItemDetails = ({ contentInfo, handleClickOnEdit }) => {
  const keys = Object.keys(contentInfo);

  return (
    <InformationCard editInfo={handleClickOnEdit}>
      {keys.map((i) => (
        <div key={i}>
          <h3>{i}</h3> <p>{contentInfo[i]}</p>
        </div>
      ))}
    </InformationCard>
  );
};
