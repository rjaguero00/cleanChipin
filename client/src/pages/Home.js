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
                        <h3>About</h3>
                        <p style={{ marginBottom: 10}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet diam tortor, id
                            consequat mauris ullamcorper eu. Orci varius natoque penatibus et magnis dis parturient
                            montes, nascetur ridiculus mus. Pellentesque et dui id justo finibus sollicitudin at et
                            metus. Ut feugiat tellus nec metus commodo, sed suscipit nisi gravida. Duis eget
                            vestibulum quam, ut porttitor sem. Donec sagittis mi sollicitudin turpis semper, et
                            interdum risus lobortis. Vestibulum suscipit nunc non egestas tristique. Proin hendrerit
                            efficitur malesuada. Mauris lorem urna, sodales accumsan quam non, tristique tempor
                            erat. Nullam non sem facilisis, tempus tortor sit amet, volutpat nisl. Ut et turpis non
                            nunc maximus mollis a vitae tortor. Pellentesque mattis risus ac quam laoreet cursus.
                            Praesent suscipit orci neque, vestibulum tincidunt augue tincidunt non. Duis consequat
                            mattis tortor vitae mattis
                        </p>
                    </div>
                </Col>
                <Col size="md-6">
                    <div className="Feed">
                        <h3>Feed</h3>
                        <p  style={{ marginBottom: 10}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet diam tortor, id
                            consequat mauris ullamcorper eu. Orci varius natoque penatibus et magnis dis parturient
                            montes, nascetur ridiculus mus. Pellentesque et dui id justo finibus sollicitudin at et
                            metus. Ut feugiat tellus nec metus commodo, sed suscipit nisi gravida. Duis eget
                            vestibulum quam, ut porttitor sem. Donec sagittis mi sollicitudin turpis semper, et
                            interdum risus lobortis. Vestibulum suscipit nunc non egestas tristique. Proin hendrerit
                            efficitur malesuada. Mauris lorem urna, sodales accumsan quam non, tristique tempor
                            erat. Nullam non sem facilisis, tempus tortor sit amet, volutpat nisl. Ut et turpis non
                            nunc maximus mollis a vitae tortor. Pellentesque mattis risus ac quam laoreet cursus.
                            Praesent suscipit orci neque, vestibulum tincidunt augue tincidunt non. Duis consequat
                            mattis tortor vitae mattis
                        </p>
                    </div>
                </Col>
            </Row>
    </div>
);

export default Home;