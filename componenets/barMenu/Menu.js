import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

export default class Menu extends Component {
    render() {
        return (
            <View>
                <Button title='Home' />
                <Button title='Settings' />
                <Button title='Catogories' />
                <Button title='Author' />
            </View>
        )
    }
}

const MainNavigator = createStackNavigator({
    Home: { screen: HomeScreen },
    Profile: { screen: ProfileScreen },
});

// const Menu = createAppContainer(MainNavigator);


