import React from 'react';
import Modal from 'react-modal';
import Maps from '../Map/Map.js';

// import '../../pages/SearchEvents/SearchEvents.css';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '500px',
        height: '420px',
        padding: '10px',
        color: '#281942',
        backgroundColor: 'white',
        border: 'none',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
};


class SearchModal extends React.Component {

    constructor() {
        super();

        this.state = {
            modalIsOpen: false
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
        this.subtitle.style.color = '#281942';
        this.subtitle.style.fontSize = '24px';
        this.subtitle.style.fontWeight = 'bold';
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    render() {
        return (
            <div>
                <a href="#" onClick={this.openModal}>{this.props.title}</a>
                {/* <button
                    className="mapbutton"
                    onClick={this.openModal}>Map
                </button> */}
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
                        lat={this.props.lat}
                        lng={this.props.lng}
                    />
                    <button
                        className="btn btn-danger"
                        style ={{marginTop: 5}}
                        onClick={this.closeModal}>Close
                    </button>


                </Modal>
            </div>
        );
    }
}
export default SearchModal;

