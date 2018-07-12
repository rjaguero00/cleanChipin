import React, { Component } from 'react';
import { Col, Row, Container } from "../../components/Grid";
import { form, Input, FormBtn } from "../../components/Form/Formitems";
import SearchList from '../../components/SearchList';
import Videos from '../../components/Videos';
import API from '../../utils/API.js';
import "./SearchEvents.css"



class SearchEvents extends Component {
    state = {
        results: [],
        id: "",
        title: "",
        body: "",
        contact: "",
        location: "",
        time: "",
        keyword: "",
        searchloc: "",
        currentPage: 1,
        resultsPerPage: 3
    };

    componentDidMount() {
        this.loadActivities();
    };

    loadActivities = () => {
        API.getActivities()
            .then(res => this.setState({ results: res.data, id: "", title: "", body: "", contact: "", location: "", time: "" })
            )
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.keyword && this.state.searchloc) {
            this.searchKeyLoc();
        } else if (this.state.keyword && !this.state.searchloc) {
            this.searchKey();
        } else if (this.state.searchloc && !this.state.keyword) {
            this.searchLoc();
        } else {
            this.loadActivities();
        }
    };

    searchKeyLoc = () => {
        console.log("search for keword and location");
        API.getKeywordLocation(this.state.keyword, this.state.searchloc)
            // .then( res => console.log(res))
            .then(res => this.setState({ results: res.data, id: "", title: "", body: "", contact: "", location: "", time: "" })
            )
            .catch(err => console.log(err));
    };

    searchKey = () => {
        console.log("search keyword only");
        API.getKeyword(this.state.keyword)
            .then(res => this.setState({ results: res.data, id: "", title: "", body: "", contact: "", location: "", time: "" })
            )
            .catch(err => console.log(err));
    };

    searchLoc = () => {
        console.log("search location only");
        API.getLocation(this.state.searchloc)
            .then(res => this.setState({ results: res.data, id: "", title: "", body: "", contact: "", location: "", time: "" })
            )
            .catch(err => console.log(err));
    };


    render() {
        return (
            <div className="container search-container">
                <nav className="navbar navbar-expand-lg navbar-dark searchBarRow" align="left">
                    <button className="navbar-toggler navbtn" type="button" data-toggle="collapse" data-target="#dropdown" aria-controls="dropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="fa fa-search" aria-hidden="true"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="dropdown">
                        <ul className="navbar-nav nabarRow justify-content-center">
                            <li>
                                <div className="input-group">
                                    <div class="input-prepend icon-search">
                                        <span class="input-group-text" id="basic-addon1"><i className="fa fa-search"></i></span>
                                    </div>
                                    <Input
                                        name="keyword"
                                        value={this.state.keyword}
                                        onChange={this.handleInputChange}
                                        className="searchInput"
                                        type="search"
                                        placeholder="Keyword"
                                        aria-label="Search" />
                                </div>
                            </li>
                            <li>
                                <div className="input-group">
                                    <div class="input-prepend icon-search">
                                        <span class="input-group-text" id="basic-addon1"><i className="fa fa-map-marker"></i></span>
                                    </div>
                                    <Input
                                        name="searchloc"
                                        value={this.state.searchloc}
                                        onChange={this.handleInputChange}
                                        className="locationInput"
                                        type="search"
                                        placeholder="Location"
                                        aria-label="Search" />
                                </div>
                            </li>
                            <li>
                                <div className="input-group">
                                    <button
                                        onClick={this.handleFormSubmit}
                                        className="searchBtn"
                                        type="submit">Search</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Row className="searchPage">
                    <Col size="md-9 sm-12">
                        <div className="mx-auto resultsList">
                            <SearchList>{this.state.results}</SearchList>
                        </div>
                    </Col>
                    <Col size="md-3 sm-12">
                        <div className="videosList">
                            <h4>Volunteer News</h4>
                            <Videos />
                        </div>
                    </Col>
                </Row>



                <nav aria-label="pagination example">
                    <ul class="pagination justify-content-center">

                        <li class="page-item disabled">
                            <a class="page-link" href="#" tabindex="-1">Previous</a>
                        </li>


                        <li class="page-item"><a class="page-link" id="1" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" id="2" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" id="3" href="#">3</a></li>


                        <li class="page-item">
                            <a class="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>



            </div>
        );
    };

};

export default SearchEvents;

