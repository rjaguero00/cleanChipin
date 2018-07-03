import React, { Component } from "react";
import API from "../../utils/API";
import { Input, FormBtn } from "./Formitems";
import ReactDOM from 'react-dom';

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
            })
                .then(res => this.checkEmail(res))
                .catch(err => console.log(err));
        }
    };
    checkEmail = (res) => {
        if (res.data.success){
            console.log(res);
            console.log("Account created. You are logged in.");
            this.props.onRequestClose();
        }else{
        console.log(res);
        console.log("Account with this email already exists.");
        const title = React.createElement('h6', {}, 'Account with this email already exists.');

        ReactDOM.render(
                title,
                document.getElementById('errormsg')
        );
        }
    }
    
    render() {
        return (
            <div className="Row">
                <br></br>
                <div id="errormsg"></div>
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