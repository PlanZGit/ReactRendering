import React, { useState } from "react";
import { MemoizedChildTwo } from "./ChildTwo";

function ParentTwo({ children }) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("XXXX");

  console.log("Parent Two");

  return (
    <div>
      ParentTwo
      <button onClick={() => setCount((c) => c + 1)}>Count: {count}</button>
      <button onClick={() => setName("yyyy")}>ChangeName</button>
      <MemoizedChildTwo name={name} />
    </div>
  );
}

export default ParentTwo;
