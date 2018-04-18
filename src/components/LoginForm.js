import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { Button, Card, CardSection } from "./common";

class LoginForm extends Component {
    state = { text: "" };

    render () {
        console.log(this.state.text);
        return (
            <Card>
                <CardSection>
                    <TextInput
                        value={this.state.text}
                        onChangeText={text => this.setState({ text })}
                        style={ styles.textInputStyle }
                    />
                </CardSection>
                <CardSection>
                </CardSection>
                <CardSection>
                    <Button>
                        Log in
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    textInputStyle: {
        height: 50,
        width: 100
    }
};

export default LoginForm;