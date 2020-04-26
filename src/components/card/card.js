import React from "react";
import "./card.css";

export const Card = (props) => {
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${props.cardInfo.id}?set=set2`}
        alt="monster pic"
        className="pic"
      />
      <h2>{props.cardInfo.name}</h2>
      <p>{props.cardInfo.email}</p>
    </div>
  );
};

export default Card;
