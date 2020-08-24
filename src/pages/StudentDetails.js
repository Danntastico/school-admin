import React from "react";
import { Headbar } from "../components/Headbar";
import { CardContainer } from "../styles/CardContainer";
export const StudentDetails = () => {
  return (
    <>
      <Headbar title="Student Details" />
      <div className="pageContent">
        <CardContainer>
          <div>
            <div>
              <div>
                <h3>Information</h3>
                <button>Edit</button>
              </div>
              <div>
                <div>
                  <p>Name</p>
                  <p>My Name</p>
                </div>
                <div>
                  <p>Name</p>
                  <p>My Name</p>
                </div>
                <div>
                  <p>Name</p>
                  <p>My Name</p>
                </div>
                <div>
                  <p>Name</p>
                  <p>My Name</p>
                </div>
                <div>
                  <p>Name</p>
                  <p>My Name</p>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </CardContainer>
      </div>
    </>
  );
};
