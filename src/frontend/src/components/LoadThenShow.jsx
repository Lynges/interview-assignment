import React from "react";
export function LoadThenShow(props) {
  const spinner = (
    <div
      class="spinner-border text-info"
      style="width: 5rem; height: 5rem;"
      role="status"
    >
      <span class="sr-only"> {props.message} </span>{" "}
    </div>
  );
  return <div> {props.isloading ? spinner : props.children} </div>;
}
