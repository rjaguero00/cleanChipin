import React from 'react';
import { Col, Row } from "../components/Grid";
import Jumbotron from '../components/Jumbotron';
import Navbar from "../components/Navbar";
import Image1 from './images/Image1.jpg';
import Image2 from './images/Image2.jpg';
import Image3 from './images/Image3.jpg';
import Logo2 from './images/Logo2.png';
import Image4 from './images/Image4.png';


const Home = () => (
    <div className="container" style={{ backgroundColor: "white"}}>
        <Row>
            <Col size="md-12">
                <Jumbotron />
            </Col>
        </Row>
        <Row>
            <Col size="md-12">
                <div className='text-center' style={{ paddingBottom: '5%'}}>
                    <img id="logo2" src={Logo2} alt="logo2" style={{ width: 250, height: 125}}/>
                </div>
            </Col>
        </Row>
        <Row>
            <Col size="md-6">
                <div className='text-center'>
                    <img id="image-2" src={Image2} alt="Image2" style={{ width: 300, height: 300, borderRadius: 15}}/>
                </div>
            </Col>
            <Col size="md-6">
                <div className="Mission">
                    <h3 style={{ color: '#42075b', textDecoration: 'underline', textDecorationCcolor: '#42075b', textAlign: 'center'}}>Mission</h3>
                    <p style={{ fontSize: 18, marginBottom: 45 }}>
                     Here at ChipIn, we are passionate about the idea that community empowerment begins at the local level. We believe that nothing
                     should get in the way of organizations and volunteers coming together to do good things for the community, so our goal is to
                     make the process of doing so easy and accessible to the public.
                    <div className='text-center'>
                        <img id="image-4" src={Image4} alt="Image4" style={{ width: 100, height: 100}}/>
                    </div>
                     Our app is designed to network good samaritans with those in need,
                     as well as track the achievements of those samaritans. Sign up now and you can begin making your community a better place. Attend
                     an event to lend a hand or post one if you have a larger vision!
                    </p>
                </div>
            </Col>
        </Row>
        <Row>
            <Col size="md-6">
                <div className="Vision">
                    <h3 style={{ color: '#42075b', textDecoration: 'underline', textDecorationCcolor: '#42075b', textAlign: 'center'}}>Vision</h3>
                    <p style={{ fontSize: 18, marginBottom: 10 }}>
                    The long term goal for ChipIn is to continue efforts in bringing people together, lowering barriers, and catalyzing community organization.
                    Additionally, our tool can be used to assist the justice department in their duties related to community service.
                    </p>
                </div>
            </Col>
            <Col size="md-6">
                <div className='text-center'>
                    <img id="image-1" src={Image1} alt="Image1" style={{ borderRadius: 15}}/>
                </div>
            </Col>
        </Row>
    </div>
);

export default Home;