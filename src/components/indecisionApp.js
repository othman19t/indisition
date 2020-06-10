import React, { Component } from "react";
import "./../sass/main.scss";
import AddOption from "./addOption";
import Header from "./header";
import Action from "./action";
import Options from "./options";
import OptionModal from "./modal";

// class based component uses state
class IndecisionApp extends Component {
  state = {
    options: [],
    selectedOption: undefined,
    // it is empty and no need to leave this.props.options as value instead you can use []
    // options: this.props.options,
  };
  /*  this is not neded anymore we used the arrow functions instead */
  // constructor(props) {
  //   super(props);
  //   this.deleteOptions = this.deleteOptions.bind(this);
  //   this.takeAction = this.takeAction.bind(this);
  //   this.addOption = this.addOption.bind(this);
  //   this.deleteSingleOption = this.deleteSingleOption.bind(this);
  //   this.state = {
  //     options: props.options,
  //   };
  // }
  componentDidMount = () => {
    try {
      const josn = localStorage.getItem("options");
      const options = JSON.parse(josn);

      if (options) {
        this.setState(() => ({ options: options }));
      }
    } catch (e) {
      // Do nothing at all
    }
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  };
  componentWillUnmount = () => {
    console.log("component will unmount");
  };
  deleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  deleteSingleOption = (singleOption) => {

    // const newArray = this.state.notes.filter((note) => {
    //   return note !== id;
    // });
    // this.setState((prevState) => ({
    //   notes: newArray,
    // }));

    // some times this makes problems us the commanted code above this line insteade
    this.setState((prevState) => ({
      options: prevState.options.filter((options) => singleOption !== options),
    }));
  };
  /******************** step 1 **********************/
  clearSelectedOption = () => {
    const shouldDeleteOption = this.state.selectedOption;
    this.setState((prevState) => ({
      options: prevState.options.filter(
        (options) => shouldDeleteOption !== options
      ),
      selectedOption: undefined,
    }));

    //this.setState(() => ({ selectedOption: undefined }));
  };
  justSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };
  //take action when clicking what should i do
  takeAction = () => {
    const randumNum = Math.floor(Math.random() * this.state.options.length);
    const selectoption = this.state.options[randumNum];
    this.setState(() => ({ selectedOption: selectoption }));
  };

  addOption = (option) => {
    // validation check
    if (!option) {
      return "Enter valid value to add item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already added";
    }
    // ad an index to an array
    this.setState((prevState) => ({
      options: prevState.options.concat(option),
    }));
  };
  render() {
    const title = "Indecision";
    const subtitle = "Put your life in the hands of computer";
    return (
      <div className="indecision">
        <Header title={title} subtitle={subtitle} />
        <Action
          hadOptions={this.state.options.length > 0}
          takeAction={this.takeAction}
        />
        <Options
          options={this.state.options}
          deleteOptions={this.deleteOptions}
          deleteSingleOption={this.deleteSingleOption}
        />
        <AddOption addOption={this.addOption} />
        <OptionModal
          selectedOption={this.state.selectedOption}
          /******************** step 2 **********************/
          clearSelectedOption={this.clearSelectedOption}
          justSelectedOption={this.justSelectedOption}
        />
      </div>
    );
  }
}
// not using it here just for a refernce
// IndecisionApp.defaultProps = {
//   options: [],
// };
export default IndecisionApp;
