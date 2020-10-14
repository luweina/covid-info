import React, { createContext, useEffect, useState } from "react";
import axios from "axios";



export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const apiKey = "3e8f1a450098461f9c773942158f4f5d";

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=ca&category=health&apiKey=${apiKey}`
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