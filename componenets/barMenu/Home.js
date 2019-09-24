import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

class Home extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        // const { navigate } = this.props.navigation;
        return (
            <Button
                title="Go to Settings"
            // onPress={() => navigate('Settings')}
            />
        );
    }
}
export default Home
