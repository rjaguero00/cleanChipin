import React from 'react';
import Geocode from "react-geocode";
import Modal from 'react-modal';
import Maps from '../Map/Map.js';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '400px'
    }
};
// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
Geocode.setApiKey("AIzaSyCqQDw0OBij-vioCfgLN0eTDS12Q_sYbJw");

// Enable or disable logs. Its optional.
Geocode.enableDebug();
// Get latidude & longitude from address.


class SearchModal extends React.Component {

    constructor() {
        super();

        this.state = {
            modalIsOpen: false,
            location:{
                lat:"",
                lng:""
            },
            lat:"",
            lng:""
        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({ modalIsOpen: true });
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#f00';
        Geocode.fromAddress(this.props.location).then(
            response => {
                const { lat, lng } = response.results[0].geometry.location;
                console.log(lat, lng);
                this.setState({lat: lat})
                this.setState({ lng: lng })
                this.setState({location:{lat:lat}});
                this.setState({location:{lng:lng}});
            },
            error => {
                console.error(error);
            }
        );
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    render() {
        return (
            <div>
                <button
                    className="btn btn-primary"
                    onClick={this.openModal}>Map
                </button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >

                    <h2 ref={subtitle => this.subtitle = subtitle}>{this.props.title}</h2>

                    <div>
                        Event Location: {this.props.location}
                    </div>
                    <Maps 
                        containerElement={<div style={{ height: `250px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                        lat={this.state.lat}
                        lng={this.state.lng}
                        center={this.state.location}
                    />
                    <button
                        className="btn btn-danger"
                        onClick={this.closeModal}>Close
                    </button>


                </Modal>
            </div>
        );
    }
}
export default SearchModal;

