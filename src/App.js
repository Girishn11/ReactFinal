import React, { useEffect, useState } from "react";

import "./App.css";
import "./index.css";
import Axios from "axios";

import { createBrowserRouter } from "react-router-dom";
import ProductInfo from "./productinfromation/productinfo";

import AppRoutes from "./Routes/routesmap";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    Axios.get(
      "https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json"
    ).then((res) => {
      setUser(res.data);
    });
  }, [user]);
  if (user) {
    localStorage.setItem("API", JSON.stringify(user));
  }
  return <AppRoutes />;
}

export default App;
