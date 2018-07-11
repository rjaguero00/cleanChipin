import React, { Component } from 'react';
import { Col, Row, Container } from "../Grid";
import HostList from './Host/HostList';
import API from "../../utils/API";
import "./HostEvents.css"



class HostEvents extends Component {
    state = {
        results: [],
        id: "",
        title: "",
        body: "",
        contact: "",
        time: "",
        location: "",
        userID: ""
    };

    componentDidMount() {
        // Get active user id using jwt token
        API.activeUser()
            .then(res => {
                if (res.data.success) {
                    let userid = res.data.user.id
                    this.setState({ userID: userid });
                    this.loadActivities();
                };
            })
            .catch(err => console.log(err));
    };

    loadActivities = () => {
        API.getHostActivities(this.state.userID)
            .then(res => {
                this.setState({ results: res.data, id: "", title: "", body: "", contact: "", time: "", location: "" })
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-12 sm-12">
                        <div className="mx-auto hostResults">
                            <HostList
                                recollectData={this.loadActivities}>{this.state.results}</HostList>
                        </div>
                    </Col>
                </Row>



            </Container>
        );
    };

};

export default HostEvents;