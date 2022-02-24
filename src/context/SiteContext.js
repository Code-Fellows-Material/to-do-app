import React from "react";

export const SiteContext = React.createContext();

const SiteContextProvider = (props) => {
  // Initial Provider State
  const state = {
    displayComplete: true,
    numItemsToDisplay: 2,
    defaultSort: "Alpha",
  };

  // Reducer Function
  const setState = (state, action) => {};

  return (
    <SiteContext.Provider value={{ state: state }}>
      {props.children}
    </SiteContext.Provider>
  );
};

export default SiteContextProvider;
