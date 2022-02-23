import React, {useContext} from "react";

// import { SiteContext } from "../../context/SiteContext";

function Header({ incomplete }) {

  // let site = useContext(SiteContext); | Example

  return (
    <header style={{  display: 'flex', justifyContent: 'center'}}>
      <h1>To Do List: {incomplete} items pending</h1> 
      {/* <p>Here: {site.state.defaultSort}</p> | example */}
    </header>
  );
}

export default Header;
