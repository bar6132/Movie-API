import { useState, useEffect } from "react";



export const useFetch = (apiPath, queryTerm="") => {
  const Api = process.env.REACT_APP_YOUR_Api;
  
    const [data, setData] = useState([]);
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${Api}&query=${queryTerm}`


    useEffect(() => {
        async function fetchMovies(){
          const response = await fetch(url);
          const json = await response.json();
          setData(json.results);
        }
        fetchMovies();
      }, [url])

  return { data }
}