import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Tour from "./Tour";

const Tours = ({ url }) => {
  const [tourList, setTourList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getTours = async () => {
      try {
        const resp = await fetch(url);
        if (!resp.ok) {
          throw "Error 404";
        }
        const result = await resp.json();
        console.log(result);
        setTourList(result);
      } catch (error) {
        console.log(error);
      }
    };
    getTours();
    return () => setIsLoading(false);
  }, []);

  const removeTour = (id) => {
    setTourList(tourList.filter((tr) => tr.id !== id));
  };

  return (
    <main>
      <h2 className="title">Our Tours</h2>
      <div className="title-underline"></div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="tours">
          {tourList.map((tour) => {
            console.log(tour);
            return (
              <Tour
                {...tour}
                key={tour.id}
                btnHandler={() => removeTour(tour.id)}
              />
            );
          })}
        </div>
      )}
    </main>
  );
};

export default Tours;
