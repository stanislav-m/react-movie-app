import { useEffect } from 'react';
import React, { useContext } from "react";
import { GlobalContext } from "../GlobalContext";
import OverviewList from "./OverviewList";
import MovieList from "./movieList";

const Router = () => {
    const {route, handleRouteUrl, loading } = useContext(GlobalContext);

    useEffect(() => {
      console.log("router setup");
      handleRouteUrl("overview"); 
      return () =>{      
        console.log("router cleanup");
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  
    console.log(route);

    return (
        <div>
        {loading && <span>Loading ... please wait...</span>}          
        { route === "overview" && <OverviewList />  }
        { route === "tv" && <MovieList />  }
        </div>
    );
};

export default Router;