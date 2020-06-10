import React from "react";
//stateless functional component
const Option = (props) => (
  <div className="option">
    <p className="option__content">{props.OptionTxt}</p>
    <button
    className="option__btn"
      onClick={(e) => {
        props.deleteSingleOption(props.OptionTxt);
      }}
    >
      Remove
    </button>
  </div>
);
export default Option;
