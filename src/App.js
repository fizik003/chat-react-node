import React from "react";
import { Route } from "react-router-dom";

import { AuthPage, HomePage } from "pages";

function App() {
  return (
    <div className="wrapper">
      <Route exact path={["/", "/login"]} component={AuthPage} />
      <Route exact path="/im" component={HomePage} />
    </div>
  );
}

export default App;
