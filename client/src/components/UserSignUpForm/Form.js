import React, { Component } from "react";
import API from "../../utils/API";
import { Input, FormBtn } from "./Formitems";

class Form extends Component {
    state = {
        email: "",
        password: ""
    };
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    handleFormSubmit = event => {
        event.preventDefault();
        console.log("save button pushed");
        if (this.state.email && this.state.password) {
            API.postUser({
                email: this.state.email,
                password: this.state.password
            }).then(res => (this.state.email))
                // .then(this.props.onRequestClose)
                .catch(err => console.log(err));
        }
    };
    render() {
        return (
            <div className="Row">
                <form>
                    <Input
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        name="email"
                        placeholder="Email Here"
                    />
                    <Input
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        name="password"
                        placeholder="Whats the password?"
                    />
                    <FormBtn
                        disabled={!(this.state.email && this.state.password)}
                        onClick={this.handleFormSubmit}
                    >
                        Submit
                            </FormBtn>
                </form>

            </div>


        );
    }
}
export default Form;