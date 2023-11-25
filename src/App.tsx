import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/actions";

const App: React.FC = () => {
  const count = useSelector((state: any) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default App;
