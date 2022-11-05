import React from "react";

class Contact extends React.Component {

    constructor(props) {
        super(props);
         
        this.state = {
          firstname: " ",
          lastname: " ",
          email: " ",
          textarea: " ",
          checkbox: " "
        };
      }
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    //   }
    
      handleFirstnameChange = event => {
        this.setState({
            firstname: event.target.value
        });
      }

      handleLastnameChange = event => {
        this.setState({
            lastname: event.target.value
        });
      }

      handleEmailChange = event => {
        this.setState({
            email: event.target.value
        });
      }

      handleTextareaChange = event => {
        this.setState({
            textarea: event.target.value
        });
      }

      handleCheckboxChange = event => {
        this.setState({
            checkbox: event.target.value
        });
      }
    
      handleSubmit = event => {
        alert(`${this.state.firstname} ${this.state.lastname} ${this.state.email}
        ${this.state.textarea} ${this.state.checkbox}
        }`)
        event.preventDefault()
      }
    
    render() {
        return(
            <div>
                <h>Contact me</h>
                <p>Hi there, contact me to ask me about anything you have in mind</p>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>First Name</label>
                        <input type="text" value={this.state.firstname} onChange={this.handleFirstnameChange} id="first_name" placeholder="Enter your first name" />
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input type="text" value={this.state.lastname} onChange={this.handleLastnameChange} id="last_name" placeholder="Enter your last name" />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="text" value={this.state.email} onChange={this.handleEmailChange} id="email" placeholder="yourname@email.com" />
                    </div>
                    <div>
                        <label>Message </label>
                        <textarea value={this.state.textarea} onChange={this.handleTextareaChange} id="message" placeholder="Send me a message and I'll reply you as soon as possible..." />                           
                    </div>
                    <div> 
                        <input type="checkbox" value={this.state.checkbox} onChange={this.handleCheckboxChange} id="checkbox"/>
                        <label>You agree to providing your data to Helen who may contact you.</label>
                    </div>
                    <button type="submit" id="btn__submit">Submit Message</button>
                </form>
                {/* <form onSubmit={this.handleSubmit}>
        <label>
          Essay:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form> */}
    
            </div>
        )
    }
    
}

export default Contact;