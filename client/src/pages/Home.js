import React from 'react';
import { Col, Row } from "../components/Grid";
import Jumbotron from '../components/Jumbotron';
import Navbar from "../components/Navbar";


const Home = () => (
    <div className="container">
        <Row>
            <Col size="md-12">
                <Jumbotron />
            </Col>
        </Row>
        <Row>
            <Col size="md-6">
                <div className="About">
                    <h3>Mission</h3>
                    <p style={{ marginBottom: 10 }}>
                     Here at ChipIn, we are passionate about the idea that community empowerment begins at the local level. We believe that nothing
                     should get in the way of organizations and volunteers coming together to do good things for the community, so our goal is to
                     make the process of doing so easy and accessible to the public. Our app is designed to network good samaritans with those in need,
                     as well as track the achievements of those samaritans. Sign up now and you can begin making your community a better place. Attend
                     an event to lend a hand or post one if you have a larger vision!
                    </p>
                </div>
            </Col>
            <Col size="md-6">
                <div className="Feed">
                    <h3>Vision</h3>
                    <p style={{ marginBottom: 10 }}>
                    The long term goal for ChipIn is to continue efforts in bringing people together, lowering barriers, and catalyzing community organization.
                    Additionally, our tool can be used to assist the justice department in their duties related to community service.
                    </p>
                </div>
            </Col>
        </Row>
    </div>
);

export default Home;