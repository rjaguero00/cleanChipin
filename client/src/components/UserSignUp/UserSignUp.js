import React from 'react';
import Modal from 'react-modal';
import API from "../../utils/API.js";
import Form from "../UserSignUpForm";

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
        padding: '20px',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '350px',
        height: '400px',
        backgroundColor: '#281942',
        border: 'none'
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

class UserSignUp extends React.Component {

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
    submitUserSignUp = event => {
        event.preventDefault();
        API.postUser(this.state.search)
            .then(res => {
                if (res.data.status === "error") {
                    throw new Error(res.data.message);
                }
                this.setState({ results: res.data.message, error: "" });
            })
            .catch(err => this.setState({ error: err.message }));
    }

    render() {
        return (
            <div>
                <button onClick={this.openModal}>Sign ups</button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >

                    <h2 ref={subtitle => this.subtitle = subtitle}>Sign up for Chipin!</h2>

                    <Form
                        onRequestClose={this.closeModal} />

                    <button
                        className="btn btn-danger"
                        onClick={this.closeModal}>Close</button>


                </Modal>
            </div>
        );
    }
}
export default UserSignUp;
