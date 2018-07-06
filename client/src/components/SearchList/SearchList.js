import React from 'react';
import SearchItem from '../SearchItem'

const SearchList = ({ children }) =>
    <div id="searchList" className="searchList">
        <h5 className="header">Results</h5>
        <div className="card-body">
            {children[0] ?
                children.slice(0,20).map(activity => {
                    return (
                        <SearchItem 
                        key={activity._id} 
                        id={activity.id}
                        title={activity.title} 
                        body={activity.body} 
                        contact={activity.contact} 
                        location={activity.address} 
                        hours={activity.hours} />
                    )
                }) :
                <h5>No Results</h5>
            }
        </div>
    </div>;

export default SearchList;