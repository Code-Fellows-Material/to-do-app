import React, {useState} from 'react';

export const SiteContext = React.createContext();




const SiteContextProvider = (props) => {
  
  
  const toggleDisplay = () => {
    setState(prevState =>({...prevState, displayComplete: !prevState.displayComplete}))
    console.log("togo")
  }

   // Initial Provider State
 let initialState = {
  displayComplete: true,
  numItemsToDisplay: 3,
  defaultSort: 'Alpha',
  toggleDisplay: toggleDisplay
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
