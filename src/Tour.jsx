import React, { useState } from "react";

const Tour = ({ image, info, name, price, btnHandler }) => {
  const [readMore, setReadMore] = useState(true);

  const expandInfo = () => {
    setReadMore(!readMore);
  };
  return (
    <div className="single-tour">
      <div className="tour-price">${price}</div>
      <img src={image} alt={name} className="img" />
      <div className="tour-info">
        <h5>{name}</h5>
        {readMore ? <p className="line-clamp">{info}</p> : <p>{info}</p>}

        <button className="info-btn" onClick={expandInfo}>
          {readMore ? "Read More" : "Read Less"}
        </button>
      </div>
      <button className="delete-btn btn btn-block" onClick={btnHandler}>
        Not Interested
      </button>
    </div>
  );
};

export default Tour;
