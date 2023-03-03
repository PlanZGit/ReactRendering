import React, { useState } from "react";
import ParentOne from "./ParentOne";
import ChildOne from "./ChildOne";

function GrandParentOne() {
  const [count, setCount] = useState(0);

  return (
    <div>
      GrandParentOne
      <button onClick={() => setCount((c) => c + 1)}>{count}</button>
      <ParentOne newCount={count}>
        <ChildOne />
      </ParentOne>
    </div>
  );
}

export default GrandParentOne;
