

import React from "react";
import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const count = useSelector((state) => state.count);

  return <h2>SyncCounter: {count}</h2>;
};

export default DisplayCounter;
