import React, { createContext, useEffect, useState } from "react";
import axios from "axios";



export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();


  useEffect(() => {
    axios
      .get(
        `https://gnews.io/api/v4/search?q=health&country=ca&token=7f6ba4bad21ef7e3ecb370a0fa8b4b72&lang=en`
      )

      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};