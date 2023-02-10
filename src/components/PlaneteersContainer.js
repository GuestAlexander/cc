import React from "react";
import Planeteer from "./Planeteer";

function PlaneteersContainer(props) {
  const {list} = props;

  return (
    <ul className="cards">
      {
        list.map((planties, index) => (
          <Planeteer key={planties.id} planties={planties} />
        ))
      }
    </ul>
  );
}

export default PlaneteersContainer;