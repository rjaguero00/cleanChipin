import React from 'react';
import SearchItem from '../SearchItem'

const SearchList = ({ children }) =>
    <div id="searchList" className="card">
        <div className="card-body">
            {children[0] ?
                children.slice(0,20).map(activity => {
                    return (
                        <SearchItem 
                        key={activity._id} 
                        title={activity.title} 
                        body={activity.body} 
                        contact={activity.contact} 
                        location={activity.location} 
                        hours={activity.hours} />
                    )
                }) :
                <h5>No Results</h5>
            }
        </div>
    </div>;

export default SearchList;