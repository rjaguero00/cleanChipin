import React from 'react';
import Eventcard from '../Eventcard';
import API from '../../utils/API';


const EventList = ({ results }) =>
    <div id="eventList" className="event-List">
        <h5 className="header text-center">Results</h5>
        <div className="card-body">
            {results[0] ?
                results.slice(0, 20).map(activity => {
                    return (
                        <Eventcard
                            key={activity._id}
                            title={activity.title}
                            body={activity.body}
                            contact={activity.contact}
                            location={activity.address}
                            points={activity.points} />
                    )
                }) :
                <h5>No Results</h5>
            }
        </div>
    </div>;

export default EventList;