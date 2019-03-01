import React from "react";
import UserModal from "./UserModal";

class Userstable extends React.Component {
    constructor(props) {
        super(props);

        this.replaceModalItem = this.replaceModalItem.bind(this);
        this.saveModalDetails = this.saveModalDetails.bind(this);
        this.state = {
            requiredItem: 0,
            modalShow: false
        }
    }

    replaceModalItem(index) {
        this.setState({
            requiredItem: index,
            modalShow: true
        });
    }

    saveModalDetails(item) {
        const requiredItem = this.state.requiredItem;
        let tempuserList = this.props.users;
        tempuserList[requiredItem] = item;
    }

    deleteItem(index) {
        let tempuserList = this.props.users;
        tempuserList.splice(index, 1);
    }

    render() {
        const users = this.props.users.map((user, index) => {
            return (
                <tr key={user.id}>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.birthday}</td>
                    <td>
                        <p data-placement="top" data-toggle="tooltip" title="Edit">
                            <button className="btn btn-primary btn-xs"  onClick={() => this.replaceModalItem(index)}>
                                <span className="glyphicon glyphicon-pencil"></span>
                            </button>
                        </p>
                    </td>
                    <td>
                        <p data-placement="top" data-toggle="tooltip" title="Delete">
                            <button className="btn btn-danger btn-xs" data-title="Delete"
                                    onClick={() => this.deleteItem(index)}>
                                <span className="glyphicon glyphicon-trash"></span>
                            </button>
                        </p>
                    </td>
                </tr>
            );
        });

        const requiredItem = this.state.requiredItem;
        let modalData = this.props.users[requiredItem];
        let modalClose = () => this.setState({ modalShow: false });
        return (
            <div className="col-md-12">
                <div className="table-responsive">
                    <table id="mytable" className="table table-bordred table-striped">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Birthday</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                        {users}
                        </tbody>
                    </table>
                    <UserModal
                        show={this.state.modalShow}
                        onHide={modalClose} />
                </div>
            </div>
        );
    }
}

export default Userstable;