import React from 'react';
import Modal from 'react-modal';
import API from "../../utils/API.js";
import Form from "../Form";
import "./CreateEventModal.css";

const customStyles = {
    content: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        background: 'rgb(255, 255, 255)',
        overflow: 'auto',
        borderRadius: '15px',
        outline: 'none',
        padding: '15px',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '355px',
        height: '500px',
        backgroundColor: '#281942',
        border: 'none',
        marginTop: '8px'
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.5)'
    }
};

class CreateEventsModal extends React.Component {

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
        this.subtitle.style.color = 'white';
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }
    // submitEvent = event => {
    //     event.preventDefault();
    //     API.postEvent(this.state.search)
    //         .then(res => {
    //             if (res.data.status === "error") {
    //                 throw new Error(res.data.message);
    //             }
    //             this.setState({ results: res.data.message, error: " " });
    //         })
    //         .catch(err => this.setState({ error: err.message }));}
    

    render() {
        return (
            <div>
                <button className="modalBtn" className="btn-primary" onClick={this.openModal}>Create Event</button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >

                    <h2 ref={subtitle => this.subtitle = subtitle}>Post an Event!</h2>

                    <Form
                        onRequestClose={this.closeModal} />

                    <button
                        className="btn btn-danger"
                        onClick={this.closeModal}>Close
                        </button>
                </Modal>
            </div>
        );
    }
}
export default CreateEventsModal;
