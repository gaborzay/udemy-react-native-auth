import React, {Component} from "react";
import {View} from "react-native";
import firebase from "firebase";
import {Button, Header, Spinner} from "./components/common";
import LoginForm from "./components/LoginForm";

class App extends Component {
    state = {loggedIn: null};

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyAV7PQb_2FSDha6wrgn2KtylPLi999DHmc",
            authDomain: "auth-fbc31.firebaseapp.com",
            databaseURL: "https://auth-fbc31.firebaseio.com",
            projectId: "auth-fbc31",
            storageBucket: "auth-fbc31.appspot.com",
            messagingSenderId: "108474473101"
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({loggedIn: true});
            } else {
                this.setState({loggedIn: false});
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <Button onPress={() => firebase.auth().signOut()}>
                        Log Out
                    </Button>
                );
            case false:
                return <LoginForm/>;
            default:
                return <Spinner size="large"/>;
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication"/>
                {this.renderContent()}
            </View>
        );
    }
}

export default App;