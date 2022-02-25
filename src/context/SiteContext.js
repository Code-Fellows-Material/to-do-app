import React, {useState} from 'react';

export const SiteContext = React.createContext();




const SiteContextProvider = (props) => {
  
  const setNumDisplay = (num) => {
    setState(prevState =>({...prevState, numItemsToDisplay: num}))
  }

  const toggleDisplay = () => {
    setState(prevState =>({...prevState, displayComplete: !prevState.displayComplete}))
  }

   // Initial Provider State
 let initialState = {
  displayComplete: true,
  numItemsToDisplay: 3,
  defaultSort: 'Alpha',
  toggleDisplay: toggleDisplay,
  setNumDisplay: setNumDisplay 
};

   // Reducer Function
   let [state, setState] = useState(initialState);

 

  return (
    <SiteContext.Provider value={{ state: state }}>
      {props.children}
    </SiteContext.Provider>
  );
};

export default SiteContextProvider;
