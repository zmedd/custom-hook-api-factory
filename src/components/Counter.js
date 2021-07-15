import React, { useReducer } from "react";
import { reducer, ACTION_TYPES } from "../state";

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const increment = () => {
    dispatch({ type: ACTION_TYPES.INCREMENT });
  };

  const decrement = () => {
    dispatch({ type: ACTION_TYPES.DECREMENT });
  };

  const timesTwo = () => {
    dispatch({ type: ACTION_TYPES.TIMES_TWO });
  };

  return (
    <div>
      <p>Counter: {state.count}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <button onClick={timesTwo}>*2</button>
    </div>
  );
};
