import React, { Component } from 'react';
import Sidebar from "../components/Sidebar"
import Wrapper from "../components/Wrapper"
import EventList from '../components/EventList';
import SavedList from '../components/SavedList';
// import Eventcard from '../components/Eventcard/Eventcard';
import SButton from '../components/SButton/SButton';
// import Savedcard from '../components/Savedcard/Savedcard';
import HostEvents from "../components/HostEvents";
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
        points: ""
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
                };
            })
            .catch(err => console.log(err));
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
            .then(res => this.setState({ points: res.data }))
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
                res.data.forEach(activity => {
                    API.getActivity(activity.ActivityId)
                        .then(event => {
                            saved.push(event.data);
                            this.setState({
                                saved: saved,
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


    handlePageChange = page => {
        this.setState({ currentPage: page });
    };




    renderPage = () => {
        if (this.state.currentPage === "/Dashboard") {
            return (
                <Wrapper>
                    <Sidebar
                        hours={this.state.hours}
                        points={this.state.points} />
                    <div>
                        <SButton />
                    </div>
                    <div className="mx-auto">
                        <EventList results={this.state.results}></EventList>
                    </div>
                </Wrapper>
            );
        } else if (this.state.currentPage === "/Dashboard/Saved") {
            return (
                <Wrapper>
                    <Sidebar
                        currentPage={this.state.currentPage}
                        hours={this.state.hours}
                        points={this.state.points}
                    />
                    Saved
                    <div>
                        <SButton />
                    </div>
                    <div className="mx-auto">
                        <SavedList saved={this.state.saved}></SavedList>
                    </div>
                </Wrapper>
            );
        } else if (this.state.currentPage === "/Dashboard/Host") {
            return (
                <Wrapper>
                    <Sidebar
                        currentPage={this.state.currentPage}
                        hours={this.state.hours}
                        points={this.state.points}
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