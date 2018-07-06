import React from 'react';
import HostItem from './HostItem'

const HostList = ({ children }) =>
    <div id="hostList" className="hostList">
        <h5 className="header">Events You Are Hosting</h5>
        <div className="card-body">
            {children[0] ?
                children.slice(0, 20).map(activity => {
                    return (
                        <HostItem
                            key={activity._id}
                            id={activity.id}
                            title={activity.title}
                            body={activity.body}
                            contact={activity.contact}
                            location={activity.address}
                            hours={activity.hours} 
                            userID={activity.userID}
                            loadActivities={this.loadActivities}
                            />
                    )
                }) :
                <h5>You have not posted any events.</h5>
            }
        </div>
    </div>;

export default HostList;