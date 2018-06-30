import React from 'react';
import Modal from 'react-modal';
import API from "../../utils/API.js";
import Form from "../UserSignUpForm";

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
        this.subtitle.style.color = '#f00';
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

<<<<<<< HEAD
                    <button onClick={this.closeModal}>close</button>
=======
                    <div>
                        <form>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" input />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" input />
                            </div>
                            <button
                                className="btn btn-success"
                                onClick={this.submitUserSignUp}>Submit
                            </button>
                        </form>
                    </div>
                    <button
                        className="btn btn-danger"
                        onClick={this.closeModal}>Close
                    </button>
>>>>>>> 49924f5a93f56d40c0c0f805a1e55cbdb8af4ef9


                </Modal>
            </div>
        );
    }
}
export default UserSignUp;
