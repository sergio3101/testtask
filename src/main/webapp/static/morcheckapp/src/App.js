import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./components/Header";
import Userstable from "./components/Userstable";

import "./App.css";

class App extends Component<{}, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            users: [],
            isLoading: false
        }
    }

    componentDidMount() {
        this.setState({isLoading: true});
        fetch('http://localhost:8080/getusers')
            .then(response => response.json())
            .then(data => this.setState({users: data, isLoading: false}));
    }

    render() {
        const {users, isLoading} = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }
        return (
            <div className="container">
                <Header/>
                <Userstable
                    users={this.state.users}/>
            </div>
        );
    }
}

export default App;
