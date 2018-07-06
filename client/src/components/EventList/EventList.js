import React from 'react';
import Eventcard from '../Eventcard';


const EventList = ({ children }) =>
    <div id="eventList" className="event-List">
        <h5 className="header text-center">Results</h5>
        <div className="card-body">
            {children[0] ?
                children.slice(0, 20).map(activity => {
                    return (
                        <Eventcard
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

export default EventList;