import React, { Component } from 'react';
import Sidebar from "../components/Sidebar"
import Wrapper from "../components/Wrapper"
import EventList from '../components/EventList';
import SavedList from '../components/SavedList';
// import Eventcard from '../components/Eventcard/Eventcard';
import SButton from '../components/SButton/SButton';
// import Savedcard from '../components/Savedcard/Savedcard';
import HostEvents from "../components/HostEvents";
import SavedEvents from "../components/SavedEvents";

import API from "../utils/API.js";


class Dashboard extends Component {
    state = {
        currentPage: "/Dashboard",
        results: [],
        saved: [],
        title: "",
        body: "",
        contact: "",
        location: "",
        userID: "",
        hours: "",
        time: "",
        points: "",
        imageString: "",
        name: "",
        socialmsg: ""
    };

    componentDidMount() {
        this.loadAttendingActivities();
        this.setState({ currentPage: this.props.location.pathname });
        API.activeUser()
            .then(res => {
                if (res.data.success) {
                    let userid = res.data.user.id
                    this.setState({ userID: userid });
                    this.getHoursPoints(userid);
                    this.getPoints(userid);
                    this.setState({ currentPage: this.props.location.pathname });
                    this.loadAttendingActivities();
                    this.loadSavedActivities();
                    this.getUserStuff(userid);
                };
            })
            .catch(err => console.log(err));
    };
    getUserStuff = (userID) => {
        API.getUserStuff(userID)
            .then(res => this.setState({ name: res.data.name, imageString: res.data.imageString }))
            .catch(err => console.log(err))
    };
    getHoursPoints = (userID) => {
        API.getHoursPoints(userID)
            .then(res => this.setState({ hours: res.data }))
            .catch(err => console.log(err))
    };
    getPoints = (userID) => {
        console.log(userID);
        API.getPoints(userID)
            // .then(res => console.log(res.data))
            .then(res => {
                this.setState({ points: res.data }),
                    this.setState({ socialmsg: "I've reached " + res.data + " points on ChipIn!  Join me on ChipIn and start earning volunteer points.  " })
            }
            )
            .catch(err => console.log(err))
    };

    handlePageChange = page => {
        this.setState({ currentPage: page });

    };


    loadAttendingActivities = () => {
        API.findAttendingActivities(this.state.userID)
            .then(res => {
                console.log(res.data);
                let results = [];
                if (res.data.length === 0) {
                    this.setState({
                        results: results,
                        title: "",
                        body: "",
                        contact: "",
                        location: ""
                    })
                }
                res.data.forEach(activity => {
                    API.getActivity(activity.ActivityId)
                        .then(event => {
                            results.push(event.data);
                            this.setState({
                                results: results,
                                title: "",
                                body: "",
                                contact: "",
                                location: ""
                            })
                        })
                });
                // this.setState({ results: res.data, title: "", body: "", contact: "", location: "" })
            })
            .catch(err => console.log(err));
    };

    loadSavedActivities = () => {
        API.findSavedActivities(this.state.userID)
            .then(res => {
                console.log(res.data);
                let saved = [];
                if (res.data.length === 0) {
                    this.setState({
                        saved: saved,
                        title: "",
                        body: "",
                        contact: "",
                        location: ""
                    })
                }
                res.data.forEach(activity => {
                    API.getActivity(activity.ActivityId)
                        .then(event => {
                            saved.push(event.data);
                            this.setState({
                                saved: saved,
                                title: "",
                                body: "",
                                contact: "",
                                location: "",
                            })
                        })
                });
                // this.setState({ results: res.data, title: "", body: "", contact: "", location: "" })
            })
            .catch(err => console.log(err));
    };


    handlePageChange = page => {
        this.setState({ currentPage: page });
    };




    renderPage = () => {
        console.log(this.state.socialmsg);
        if (this.state.currentPage === "/Dashboard") {
            return (
                <Wrapper>
                    <Sidebar
                        name={this.state.name}
                        imageString={this.state.imageString}
                        hours={this.state.hours}
                        points={this.state.points}
                        socialmsg={this.state.socialmsg} />
                    <div>
                        <SButton />
                    </div>
                    <div className="mx-auto">
                        <EventList results={this.state.results} recollectData={this.loadAttendingActivities}></EventList>
                    </div>
                </Wrapper>
            );
        } else if (this.state.currentPage === "/Dashboard/Saved") {
            return (
                <Wrapper>
                    <Sidebar
                        name={this.state.name}
                        currentPage={this.state.currentPage}
                        imageString={this.state.imageString}
                        hours={this.state.hours}
                        points={this.state.points}
                        socialmsg={this.state.socialmsg}
                    />
                    <div>
                        <SButton />
                    </div>

                    <div className="mx-auto">
                        <SavedList saved={this.state.saved} recollectData={this.loadSavedActivities}></SavedList>
                    </div>
                </Wrapper>
            );
        } else if (this.state.currentPage === "/Dashboard/Host") {
            return (
                <Wrapper>
                    <Sidebar
                        name={this.state.name}
                        currentPage={this.state.currentPage}
                        imageString={this.state.imageString}
                        hours={this.state.hours}
                        points={this.state.points}
                        socialmsg={this.state.socialmsg}
                    />
                    <div>
                        <SButton />
                    </div>
                    <HostEvents />
                </Wrapper>
            );

        }
    }


    render() {
        return (<div>{this.renderPage()}</div>)
    };
};

export default Dashboard;