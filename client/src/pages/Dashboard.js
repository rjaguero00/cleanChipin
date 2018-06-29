import React, { Component } from 'react';
import Sidebar from "../components/Sidebar"
import Wrapper from "../components/Wrapper"
import Eventcard from '../components/Eventcard/Eventcard';
import SButton from '../components/SButton/SButton';

class Dashboard extends Component {



    render() {
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
    };
};

export default Dashboard;