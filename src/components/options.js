import React from "react";
import Option from "./option";
//stateless functional component
const Options = (props) => (
  <div className="options">
    <div className="options__remove-con">
      <p className="options__your">Your Options</p>
      <button className="options__remove-btn" onClick={props.deleteOptions}>
        Remove All
      </button>
    </div>
    {props.options.map((myOptions) => (
      <Option
        key={myOptions}
        OptionTxt={myOptions}
        deleteSingleOption={props.deleteSingleOption}
      />
    ))}
    {props.options.length === 0 && <p className="options__empty">There are no options</p>}
  </div>
);
export default Options;
