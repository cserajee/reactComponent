import React, { useEffect, useState } from "react";
import "./style.css";
import Loading from "./component/Loading";
import Tours from "./component/Tours";
const url = "https://course-api.com/react-tours-project";
const TourApp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch(url);
      if (response.status === 200) {
        const data = await response.json();
        setTours(data);
      } else {
        setError(true);
      }
    } catch (e) {
      console.log("Error {}", e);
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  if (loading)
    return (
      <main>
        <Loading />
      </main>
    );

  if (error)
    return (
      <main>
        <div className="title">
          <h2>Tour fetch error</h2>
          <section>
            <button type="button" className="btn" onClick={fetchTours}>
              Retry
            </button>
          </section>
        </div>
      </main>
    );

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <section>
            <button className="btn" onClick={() => fetchTours()}>
              refresh
            </button>
          </section>
        </div>
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};

export default TourApp;
