

import React from "react";
import { Provider } from "react-redux";
import Counter from "./components/Counter";
import DisplayCounter from "./components/DisplayCounter";
import store from "./Store";
import './styles.css'
const App = () => {
  return (
    <Provider store={store}>
      <h3 style={{
        marginLeft:'12px'
      }}>Redux Sync Counter</h3>
      <div className="App">
        
        <div className="counters">

        <Counter />
        <DisplayCounter />
        </div>
      </div>
    </Provider>
  );
};

export default App;
