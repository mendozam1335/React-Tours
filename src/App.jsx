import { useState, useEffect } from "react";
import Tours from "./Tours";
import Loading from "./Loading";

const url = "https://course-api.com/react-tours-project";

const App = () => {
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
  return (
    <main>
      <h2 className="title">Our Tours</h2>
      <div className="title-underline"></div>
      <section>
        {isLoading ? (
          <Loading />
        ) : (
          <Tours list={tourList} setTourList={setTourList} />
        )}
      </section>
    </main>
  );
};
export default App;
