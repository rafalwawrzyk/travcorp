import React from "react";
import * as c from "components";
import useFetch from "hooks/useFetch";
import "./styles.scss";

export const Tiles = () => {
  const { data, loading, error } = useFetch(process.env.REACT_APP_API);

  if (error) {
    return <c.NotFound />;
  }

  return (
    <>
      {loading ? (
        <c.Loader />
      ) : (
        <div>
          <h2 className="trips__title">Recently viewed trips</h2>
          <div className="tiles">
            {data &&
              data.data.map((trip) => <c.Tile trip={trip} key={trip.id} />)}
          </div>
        </div>
      )}
    </>
  );
};
