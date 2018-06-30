import React, { Component } from 'react';
import SButton from '../../components/SButton/SButton';
import Sidebar from '../../components/Sidebar';
import Wrapper from '../../components/Wrapper';
import SearchModal from '../../components/SearchModal';
import SearchList from '../../components/SearchList';
import API from '../../utils/API.js';
import "./SearchEvents.css"



class SearchEvents extends Component {
    state = {
        results: [],
        title: "Teaching Artist",
        body:"Seeking knowledgeable, reliable, enthusiastic and inspirational Teaching Artists in the disciplines of visual art, dance, music and drama, for our “A Taste of the Arts”, program. We are seeking Teaching Artists to provide instruction for an in-school arts enrichment program.",
        contact:"fake@email.com",
        location:"1938 W 44th Street, Tucson, Az"
    };

    componentDidMount() {
        this.loadActivities();
    };

    loadActivities = () => {
        API.getActivities()
            .then(res => {
                this.setState({ results: res.data, title: "", body:"", contact:"", location:"" })
            })
            .catch(err => console.log(err));
    };

    // submit search function for future filtered search of activities
    // submitSearch = (searchData) => {
    //     console.log(searchData);

    //     API.searchActivites(searchData)
    //         .then(res => {
    //             this.setState({ results: res.data.response.docs });
    //             console.log(this.state.results)
    //         }
    //         )
    //         .catch(err => console.log(err));
    // };


    render() {
        return (
            <Wrapper>
                <Sidebar />
                <div>
                    <SButton />
                </div>

                <div className="mx-auto">
                    <h5 className="header">Results</h5>
                    <SearchList>{this.state.results}</SearchList>
                    <SearchModal         
                        title={this.state.title}
                        body={this.state.body}
                        contact={this.state.contact}
                        location={this.state.location}
                        hours={this.state.hours}>{this.state.modalIsOpen}
                    </SearchModal>  
                </div>



            </Wrapper>
        );
    };

};

export default SearchEvents;

/* <div className="mx-auto">       
<h5 className="header text-center">Results</h5>     
<div className="card result-item">
    <div className="card-body">
        <h5 className="card-title ">
            <a href="">{this.state.title}</a></h5>
        <p className="card-text">Description: {this.state.body}</p>
        <p className="card-text">Contact: {this.state.contact}</p>
        <p className="card-text">Location: {this.state.location}</p>
        <p className="card-text">Hours: {this.state.hours}</p>
        <button onClick={this.saveActivity} className="btn btn-primary">Save</button>
        <SearchModal 
        title={this.state.title}
        body={this.state.body}
        contact={this.state.contact}
        location={this.state.location} 
        hours={this.state.hours} */
