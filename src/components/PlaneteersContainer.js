import React from "react";
import Planeteer from "./Planeteer";

function PlaneteersContainer(props) {
  const {list} = props;

  return (
    <ul className="cards">
      {
        list.map((planet, index) => (
          <Planeteer key={planet.id} planet={planet} />
        ))
      }
    </ul>
  );
}

export default PlaneteersContainer;