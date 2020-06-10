import React from "react";
import Modal from "react-modal";
const Test = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel="Selected Options"
    ariaHideApp={false}
    onRequestClose={props.justSelectedOption}
    closeTimeoutMS={500}
    className="modal"
  >
    <h2 className="modal__title">Selected Option</h2>
    {props.selectedOption && (
      <p className="modal__option">{props.selectedOption}</p>
    )}

    <button className="modal__btn" onClick={props.clearSelectedOption}>
      Choose Option
    </button>
  </Modal>
);
/******************** step 3 is the line <button onClick={props.clearSelectedOption}>ok</button> **********************/
export default Test;
