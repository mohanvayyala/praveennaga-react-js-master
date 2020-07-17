import React, { Component } from "react";
import logo from './PraveenOruganti.png';
import './App.css';
import { testAPI } from './services/APIService'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: " " };
    }

    callAPI() {
        var response = testAPI();
        response.then((res) => {
            this.setState({ apiResponse: res })
        });
    }

    componentDidMount() {
        this.callAPI();
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p className="App-title">Single Page React App Handshake with Express JS Backend API
                    <br /> {this.state.apiResponse}</p>
                </header>

            </div>
        );
    }
}

