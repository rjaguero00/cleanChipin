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
                        Our objective is to create a networking platorm that facilitates community service and organization. We do this by
                        creating a forum where users can post volunteer events large and small, and other users can easily discover and attend these activities.
                        </p>
                </div>
            </Col>
            <Col size="md-6">
                <div className="Feed">
                    <h3>Vision</h3>
                    <p style={{ marginBottom: 10 }}>
                        The longer term goal for Chipin would have been lowering barriers and catalyzing community organization. Additionally, our tool can be used
                        to assist the justice apartment in thier duties related to community service.
                        </p>
                </div>
            </Col>
        </Row>
    </div>
);

export default Home;