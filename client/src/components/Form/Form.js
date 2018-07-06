import React, { Component } from "react";
import axios from 'axios';
import API from "../../utils/API";
import { Input, TextArea, FormBtn } from "./Formitems";

class Form extends Component {
    state = {
        userID: "",
        title: "",
        contact: "",
        body: "",
        address: "",
        hours: 4,
        points: 4
    };

    componentDidMount() {
        API.activeUser()
        .then(res => {
            if (res.data.success) {
                    let userid = res.data.user.id
                    console.log(userid);
                    this.setState({ userID: userid });
                    console.log(this.state);
                };
            })
            .catch(err => console.log(err));
    }
    

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.title && this.state.contact && this.state.body && this.state.address) {
            API.postEvent({
                UserId: this.state.userID,
                title: this.state.title,
                body: this.state.body,
                contact: this.state.contact,
                address: this.state.address,
                hours: this.state.hours,
                points: this.state.points
            })
                .then(this.props.onRequestClose)
                .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <div className='Row'>
                <form>
                    <Input
                        value={this.state.title}
                        onChange={this.handleInputChange}
                        name="title"
                        placeholder="Volunteer Event Title (required)"
                    />
                    <Input
                        value={this.state.contact}
                        onChange={this.handleInputChange}
                        name="contact"
                        placeholder="Contact Email (required)"
                    />
                    <TextArea
                        value={this.state.body}
                        onChange={this.handleInputChange}
                        name="body"
                        placeholder="Volunteer Event Description (Optional)"
                    />
                    <Input
                        value={this.state.address}
                        onChange={this.handleInputChange}
                        name="address"
                        placeholder="Event Address (required)"
                    />
                    <FormBtn
                        disabled={!(this.state.title && this.state.contact && this.state.body && this.state.address)}
                        onClick={this.handleFormSubmit}
                    >
                        Submit Event
                    </FormBtn>
                </form>


            </div>

        );
    }
}

export default Form;
