import React, { useState } from "react";
import { MemoizedChildA } from "./ContextChildren";

export const CountContext = React.createContext();
const CountProvider = CountContext.Provider;

function ContextParent({ children }) {
  const [count, setCount] = useState(0);
  console.log("Context Parent");
  return (
    <div>
      ContextParent
      <button
        onClick={() => {
          setCount((c) => c + 1);
        }}
      >
        Count : {count}
      </button>
      <CountProvider value={count}>{children}</CountProvider>
    </div>
  );
}

export default ContextParent;
