import React, { Component } from 'react';
import Sidebar from '../../components/Sidebar';
import Wrapper from '../../components/Wrapper';
import SearchList from '../../components/SearchList';
import API from '../../utils/API.js';
import "./SearchEvents.css"



class SearchEvents extends Component {
    state = {
        results: [],
        title: "",
        body:"",
        contact:"",
        location:""
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
                {/* <div>
                    <SButton />
                </div> */}

                <div className="mx-auto">
                    <SearchList>{this.state.results}</SearchList>
                    {/* <SearchModal         
                        title={this.state.title}
                        body={this.state.body}
                        contact={this.state.contact}
                        location={this.state.location}
                        hours={this.state.hours}>
                    </SearchModal>   */}
                </div>



            </Wrapper>
        );
    };

};

export default SearchEvents;

