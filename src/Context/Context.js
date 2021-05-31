import React, { useState, useContext } from "react";
import axios from "axios";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [someMatches, setSomeMatches] = useState([]);
  const [allMatches, setAllMatches] = useState([]);

  const setPageLoading = (load) => {
    setLoading(load);
  };
  const getSomeMatches = () => {
    //call to api
    axios
      .get("")
      .then((res) => {
        // console
        setSomeMatches(res.data.latestmatches);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getAllMatches = () => {
    //call to api

    axios
      .get("")
      .then((res) => {
        setAllMatches(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <AppContext.Provider
      value={{
        loading,
        someMatches,
        allMatches,
        setPageLoading,
        getSomeMatches,
        getAllMatches,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
