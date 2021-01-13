import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Units } from './UnitsComponent';
import { News } from './NewsComponent';

//Tab Navigation
const Tab = createBottomTabNavigator();

function RenderTabs() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="News" component={News} />
                <Tab.Screen name="Units" component={Units} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

class Main extends Component {
    render() {
        return(
            <RenderTabs />
        )
    }
}

export default Main;