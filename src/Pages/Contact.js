import React from "react";
import "../Components/Contactstyles.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: " ",
      lastname: " ",
      email: " ",
      textarea: " ",
      checkbox: " ",
    };
  }

  handleFirstnameChange = (event) => {
    this.setState({
      firstname: event.target.value,
    });
  };

  handleLastnameChange = (event) => {
    this.setState({
      lastname: event.target.value,
    });
  };

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  handleTextareaChange = (event) => {
    this.setState({
      textarea: event.target.value,
    });
  };

  handleCheckboxChange = (event) => {
    this.setState({
      checkbox: event.target.value,
    });
  };

  handleSubmit = (event) => {
    alert(`${this.state.firstname} ${this.state.lastname} ${this.state.email}
        ${this.state.textarea} ${this.state.checkbox}
        }`);
    event.preventDefault();
  };

  placeholder = "Your message";

  render() {
    return (
      <div className="container">
        <h1 className="header-text">Contact me</h1>
        <p className="paragraph">
          Hi there, contact me to ask me about anything you have in mind
        </p>
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="name-container">
            <div className="names">
              <label className="label">First Name</label>
              <input
                className="surname"
                type="text"
                value={this.state.firstname}
                onChange={this.handleFirstnameChange}
                id="first_name"
                placeholder="Enter your first name"
              />
            </div>
            <div className="names">
              <label className="label">Last Name</label>
              <input
                className="surname"
                type="text"
                value={this.state.lastname}
                onChange={this.handleLastnameChange}
                id="last_name"
                placeholder="Enter your last name"
              />
            </div>
          </div>

          <div className="email">
            <label className="label">Email</label>
            <input
              type="text"
              value={this.state.email}
              onChange={this.handleEmailChange}
              id="email"
              placeholder="yourname@email.com"
            />
          </div>
          <div className="">
            <label className="label">Message </label>
            <textarea
              value={this.state.textarea}
              onChange={this.handleTextareaChange}
              id="message"
              placeholder="Send me a message and I'll reply you as soon as possible..."
            />
          </div>
          <div>
            <input
              type="checkbox"
              value={this.state.checkbox}
              onChange={this.handleCheckboxChange}
              id="checkbox"
            />
            <label className="checkbox-label">
              You agree to providing your data to Helen who may contact you.
            </label>
          </div>
          <button type="submit" id="btn__submit">
            Submit Message
          </button>
        </form>
      </div>
    );
  }
}

export default Contact;
