import React from 'react';
import Savedcard from '../Savedcard';


const SavedList = ({ saved }) =>
    <div id="savedList" className="saved-List">
        <h5 className="header text-center">Results</h5>
        <div className="card-body">
            {saved[0] ?
                saved.slice(0, 20).map(activity => {
                    return (
                        <Savedcard
                            key={activity._id}
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

export default SavedList;