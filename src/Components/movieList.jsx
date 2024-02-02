import React, { useContext } from "react";
import { GlobalContext } from "../GlobalContext";

const MovieList = () => {
  const { movieList, loading } = useContext(GlobalContext);
  const {liveTvs, liveRadios} =  movieList;
  console.log(liveRadios);
  console.log(liveTvs);

  return (
    <div className="movieList">
        {loading && <span>Loading ... please wait...</span>}
        {liveTvs
        ? liveTvs.map((item) => (
            <div className="box" key={item.id}>
              <h3>{item.name}</h3>
              <p>{item.url}</p>
              <img src={item.logo} alt="logo"/>
            </div>
          ))
        : null}
        {liveRadios 
        ? liveRadios.map((item) => (
            <div className="box" key={item.channel}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <img src={item.logo} alt="logo" />
            </div>
          ))
        : null}

    </div>
  );
};

export default MovieList;
