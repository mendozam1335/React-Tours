import { useState, useEffect } from "react";
import Tours from "./Tours";
import Loading from "./Loading";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [tourList, setTourList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getTours = async () => {
    setIsLoading(true);
    try {
      const resp = await fetch(url);
      if (!resp.ok) {
        throw "Error 404";
      }
      const result = await resp.json();
      setIsLoading(false);
      setTourList(result);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getTours();
  }, []);

  if (tourList.length === 0) {
    return (
      <main>
        <h2 className="title">No More Tours</h2>
        <button className="btn" onClick={getTours}>
          Refresh
        </button>
      </main>
    );
  }
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
