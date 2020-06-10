import React, { Component } from "react";
// class based component uses state
class AddOption extends Component {
  state = {
    error: undefined,
  };

  
  hendleForm = (e) => {
    e.preventDefault();
    const option = e.target.elements.optionName.value.trim();
    const error = this.props.addOption(option);
    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.optionName.value = "";
    }
  };
  render() {
    return (
      <div className="addoption">
        {this.state.error && (
          <p className="addoption__error">{this.state.error}</p>
        )}
        <form onSubmit={this.hendleForm}>
          <input
            placeholder="Type your option"
            className="addoption__input"
            type="text"
            name="optionName"
          />
          <button className="addoption__btn">Add Option</button>
        </form>
      </div>
    );
  }
}
export default AddOption;
