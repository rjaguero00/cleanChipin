import React, { Component } from 'react';
import Sidebar from "../components/Sidebar"
import Wrapper from "../components/Wrapper"
import Eventcard from '../components/Eventcard/Eventcard';
import SButton from '../components/SButton/SButton';
import Savedcard from '../components/Savedcard/Savedcard';


class Dashboard extends Component {
    state = {
        currentPage: "/Dashboard",
    };
    componentDidMount() {
        this.setState({ currentPage: this.props.location.pathname });
    }
    handlePageChange = page => {
        this.setState({ currentPage: page });
    };


    //Remove an activity that a user no longer wishes to attend
    notAttending = () => {

    }

    //Remove an activity that a user is no longer interested in
    removeSavedActivity = () => {

    }

    //Mark saved activity to attending
    atteningActivity = () => {

    }



    renderPage = () => {
        if (this.state.currentPage === "/Dashboard") {
            return (
                <Wrapper>
                    <Sidebar />
                    <div>
                        <SButton />
                    </div>
                    <div className="mx-auto">
                        <Eventcard />
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
                        <Savedcard />
                    </div>
                </Wrapper>
            );
        }
    }


    render() {
        return (<div>{this.renderPage()}</div>)
    };
};

export default Dashboard;