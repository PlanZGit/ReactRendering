import React, { useState } from "react";

function ParentOne({ children }) {
  const [count, setCount] = useState(0);
  console.log("Parent One");

  return (
    <div>
      ParentOne
      <button onClick={() => setCount((c) => c + 1)}>{count}</button>
      {children}
    </div>
  );
}

export default ParentOne;
