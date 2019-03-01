import React from "react";
var Modal = require('react-bootstrap-modal')

class UserModal extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
            username: '',
            email: ''
        };
    }

    usernameHandler(e) {
        this.setState({ username: e.target.value });
    }

    emailHandler(e) {
        this.setState({ email: e.target.value });
    }

    handleSave() {
        const item = this.state;
        this.props.saveModalDetails(item)
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    render() {
        return (
            <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p><span className="modal-lable">Username:</span><input value={this.state.username} onChange={(e) => this.usernameHandler(e)} /></p>
                    <p><span className="modal-lable">Email:</span><input value={this.state.email} onChange={(e) => this.emailHandler(e)} /></p>
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => { this.handleSave() }}>Save changes</button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default UserModal;