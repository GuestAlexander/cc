import React, {useState} from "react";

function Planeteer(props) {
  const [figs, setFigs] = useState(true);
  const { planties } = props;

  return (
    <li className="cardsitem">
      <div className="card">
        <img
          src={planties.pictureUrl}
          alt={planties.name}
          className="cardimage"
          onClick={() => setFigs(!figs)}
        />
        <div className="cardcontent">
          <div className="cardtitle">{planties.name}</div>
          <p className="cardtext"> {planties.bio}</p>
          <div className="carddetail">
            <p>{planties.twitter}</p>
            <p>
              {
               planties.fromUSA ? "USA-based" : "Working overseas" 
              }
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Planeteer;