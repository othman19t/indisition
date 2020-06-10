import React from "react";
//stateless functional component
const Action = (props) => (
  <div>
    <button className="action" onClick={props.takeAction} disabled={!props.hadOptions}>
      What should i do?
    </button>
  </div>
);
export default Action;
