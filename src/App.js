import React, { useState, useEffect, createContext } from "react";
import "./App.css";
import {
  MenuItem,
  FormControl,
  Select,
  Card,
  CardContent,
} from "@material-ui/core";
import HomePage from "./components/home"
import "leaflet/dist/leaflet.css";
import TopNavbar from "./components/navbar";
import { Route, Switch } from "react-router-dom";
import { NewsContextProvider } from "./NewsContext";
import News from "./components/News"
import Myth from "./components/Myth"
import Self from "./components/self-test"

function App(props) {

  return (
    <div className="todoapp stack-large">
      <NewsContextProvider>
      <TopNavbar />
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/news" component={News} />
          <Route path="/myth" component={Myth} />
          <Route path="/self-test" component={Self} />

        </Switch>
      </NewsContextProvider>

    </div>
  );
}

export default App;
