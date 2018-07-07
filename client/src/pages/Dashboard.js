import React, { Component } from 'react';
import Sidebar from "../components/Sidebar"
import Wrapper from "../components/Wrapper"
import EventList from '../components/EventList';
import SavedList from '../components/SavedList';
// import Eventcard from '../components/Eventcard/Eventcard';
import SButton from '../components/SButton/SButton';
import Savedcard from '../components/Savedcard/Savedcard';
import HostEvents from "../components/HostEvents";
import API from "../utils/API.js";


class Dashboard extends Component {
    state = {
        currentPage: "/Dashboard",
        results: [],
        title: "",
        body: "",
        contact: "",
        location: ""
    };

    componentDidMount() {
        this.setState({ currentPage: this.props.location.pathname });
        // this.Attending();
    }

    handlePageChange = page => {
        this.setState({ currentPage: page });
    };

    // loadAttendingActivities = () => {
    //     API.Attending()
    //         .then(res => {
    //             this.setState({ results: res.data, title: "", body: "", contact: "", location: "" })
    //         })
    //         .catch(err => console.log(err));
    // };


    handlePageChange = page => {
        this.setState({ currentPage: page });
    };




    renderPage = () => {
        if (this.state.currentPage === "/Dashboard") {
            return (
                <Wrapper>
                    <Sidebar />
                    <div>
                        <SButton />
                    </div>
                    <div className="mx-auto">
                        <EventList>{this.state.results}</EventList>
                    </div>
                </Wrapper>
            );
        } else if (this.state.currentPage === "/Dashboard/Saved") {
            return (
                <Wrapper>
                    <Sidebar
                        currentPage={this.state.currentPage}
                    />
                    Saved
                    <div>
                        <SButton />
                    </div>
                    <div className="mx-auto">
                        <SavedList>{this.state.results}</SavedList>
                    </div>
                </Wrapper>
            );
        } else if (this.state.currentPage === "/Dashboard/Host") {
            return (
                <Wrapper>
                    <Sidebar
                        currentPage={this.state.currentPage}
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