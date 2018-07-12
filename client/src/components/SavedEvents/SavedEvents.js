import React, { Component } from 'react';
import { Col, Row, Container } from "../Grid";
import SavedList from '../SavedList';
import API from "../../utils/API";




class SavedEvents extends Component {
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
        console.log(this.state.userID);
        API.findSavedActivites(this.state.userID)
            .then(res => {
                let results = [];
                res.data.forEach(activity => {
                    API.getActivity(activity.ActivityId)
                        .then(event => {
                            results.push(event.data);
                            this.setState({
                                results: results,
                                title: "",
                                body: "",
                                contact: "",
                                time: "",
                                location: ""
                            })
                        })
                });
                // this.setState({ results: res.data, title: "", body: "", contact: "", location: "" })
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-12 sm-12">
                        <div className="mx-auto savedResults">
                            <SavedList
                                loadActivities={this.loadActivities}>{this.state.results}</SavedList>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    };

};

export default SavedEvents;