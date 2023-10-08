import React, { useEffect, useState } from "react";

const Tours = ({ url }) => {
  const [tourList, setTourList] = useState([]);

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
  }, []);
  return <div>Tours</div>;
};

export default Tours;
