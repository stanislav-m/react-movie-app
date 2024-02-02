import { createContext, useState } from "react";

export const GlobalContext = createContext({
  route: '',
  handleRouteUrl: () => {},
  searchParam: "",
  handleChange: () => {},
  handleSubmit: () => {},
  movieList: [],
  overviewList : [],
  loading: false,
});

const GlobalState = ({children}) => {
  const [route, setRoute] = useState('')
  const [searchParam, setSearchParam] = useState('')
  const [loading, setLoading] = useState(false)
  const [movieList, setMovieList] = useState([])
  const [overviewList, setOverviewList] = useState([])

  const handleRouteUrl = async(route_url) => {
    //setLoading(true);
      var opts = {
        'mode' : 'cors'
      }

    console.log(route_url);
    var dest = null;
    //const url = `https://napi.voyo.bg`;
    if (route_url === 'overview') {
      dest = 'overview';
    } else {
      if (route_url === 'tv') {
        dest = 'tv';
      }else {
        if (route_url === '') {
          console.log("setroute empty");
          return;
        }
      }
    }
    const url = `http://localhost:5000`;
    const path = `/api/bg/v1/`
    const responce = await fetch(`${url}${path}${dest}`, opts);
    const data = await responce.json();
    if (data) {
      console.log(data);
      //setLoading(false)
      if (route_url === 'overview') {
        setOverviewList(data);
      } else {
        if (route_url === 'tv') {
          setMovieList(data);
        }
      }
    }
    setRoute(route_url);
  }

  const handleOnChange = (event)=> {
    console.log(event.target.value);
    setSearchParam(event.target.value);
  } 
    const handleSubmit = async()=> {
    setLoading(true);

      var opts = {
        'mode' : 'cors'
      }

    //const responce = await fetch(`https://swapi.dev/api/${searchParam}`);
    //const url = `https://napi.voyo.bg`;
    const url = `http://localhost:5000`;
    const path = `/api/bg/v1/`
    const responce = await fetch(`${url}${path}${searchParam}`, opts);
    const data = await responce.json();
    if (data) {
      console.log(data);
      setLoading(false)
      setMovieList(data) 
      setSearchParam('');
    }
  } 
  const contextValue = {
    route,
    handleRouteUrl,
    searchParam,
    handleOnChange,
    handleSubmit,
    movieList,
    overviewList,
    loading,
  };

  return <GlobalContext.Provider value={contextValue}>{children}</GlobalContext.Provider>;
};

export default GlobalState;