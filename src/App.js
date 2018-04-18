import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from "./components/common";
import LoginForm from "./components/LoginForm";

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyAV7PQb_2FSDha6wrgn2KtylPLi999DHmc",
            authDomain: "auth-fbc31.firebaseapp.com",
            databaseURL: "https://auth-fbc31.firebaseio.com",
            projectId: "auth-fbc31",
            storageBucket: "auth-fbc31.appspot.com",
            messagingSenderId: "108474473101"
        })
    }

    render () {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm/>
            </View>
        );
    }
}

export default App;