import React, { useEffect, useState } from "react";
import Tour from "./Tour";

const Tours = ({ list, setTourList }) => {
  const removeTour = (id) => {
    setTourList(list.filter((tr) => tr.id !== id));
  };

  return (
    <div className="tours">
      {list.map((tour) => {
        return (
          <Tour
            {...tour}
            key={tour.id}
            btnHandler={() => removeTour(tour.id)}
          />
        );
      })}
    </div>
  );
};

export default Tours;
