// App.js

import React from "react";
import { Provider } from "react-redux";
import Counter from "./components/Counter";
import DisplayCounter from "./components/DisplayCounter";
import store from "./Store";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Counter />
        <DisplayCounter />
      </div>
    </Provider>
  );
};

export default App;
