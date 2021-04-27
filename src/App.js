import './App.css';
import React from "react"
import Home from "./pages/Home/Home"
import Button from "./pages/Home/Button"

import { Provider } from "react-redux";
import store from "./redux/store/store";
import {
  HashRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Router>
          <Button/>

          {/* //////////////////Untuk pindah halaman////////////////// */}
          <Switch>
              <Route exact path="/home">
                  <Home/>
              </Route>
              {/* <Route exact path="/home"> ///tarok path yang lo pengen
                    //// Tarok komponen yang lo pengen untuk path yg udah lo tentuin
              </Route> */}
          </Switch>
          {/* //////////////////Untuk pindah halaman////////////////// */}

      </Router>
    </div>
    </Provider>
  );
}

export default App;
