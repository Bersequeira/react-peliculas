import React from "react";
//import React, {Fragment} from 'react';
import List from "./containers/List";

const App = () => {
  return(
      <>
            <nav className="p-4 navbar navbar-dark bg-dark border-bottom border-white">
              <a href="/" className="navbar-brand">
                MovieApp
              </a>
            </nav>
              <main className="bg-dark">
                  <div className="container">
                      <List/>
                  </div>
            </main>
      </>
    
  )
}


export default App;
