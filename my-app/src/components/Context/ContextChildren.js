import React, { useContext } from "react";
import { CountContext } from "./ContextParent";

export const ChildA = () => {
  console.log("child A Render");
  return (
    <>
      <div>Child A</div>
      <ChildB />
    </>
  );
};

export const MemoizedChildA = React.memo(ChildA);

export const ChildB = () => {
  console.log("child B Render");
  return (
    <>
      <div>Child B</div>
      <ChildC />
    </>
  );
};

export const ChildC = () => {
  const count = useContext(CountContext);
  console.log("child C Render");
  return (
    <>
      <div>Child C count : {count}</div>
    </>
  );
};
