import React from "react";

class Modal1 extends React.Component {
    constructor(props) {
        super(props);
        this.handleSave = this.handleSave.bind(this);
        this.state = {
            username: '',
            email: ''
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            username: nextProps.data.username,
            email: nextProps.data.email,
        });
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

    render() {
        return (
            <div className="modal fade" id="edit" tabIndex="1" role="dialog" aria-labelledby="edit" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Jewel</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p><span className="modal-lable">Username:</span><input value={this.state.username} onChange={(e) => this.usernameHandler(e)} /></p>
                            <p><span className="modal-lable">Email:</span><input value={this.state.email} onChange={(e) => this.emailHandler(e)} /></p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => { this.handleSave() }}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;