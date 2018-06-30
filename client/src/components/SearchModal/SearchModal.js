import React from 'react';
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
        this.subtitle.style.color = '#f00';

    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    render() {
        return (
            <div>
                <button onClick={this.openModal}>Map</button>
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
                    <button onClick={this.closeModal}>close</button>


                </Modal>
            </div>
        );
    }
}
export default SearchModal;

