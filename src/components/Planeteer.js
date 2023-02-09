import React, {useState} from "react";

function Planeteer(props) {
  const [figs, setFigs] = useState(true);
  const { planties } = props;

  return (
    <li className="cardsitem">
      <div className="card">
        <img
          src={planet.pictureUrl}
          alt={planet.name}
          className="cardimage"
          onClick={() => setFigs(!flag)}
        />
        <div className="cardcontent">
          <div className="cardtitle">{planties.name}</div>
          <p className="cardtext"></p>
          <div className="carddetail">
            <p>{planet.twitter}</p>
            <p>
              {
               planet.fromUSA ? "USA-based" : "Working overseas" 
              }
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Planeteer;