import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/Home';
import CategoryView from '../screens/CategoryView';
import Header from '../componentsShared/Header';
import React from 'react';



const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return { headerTitle: () => <Header navigation={navigation} title="Home" /> }
        }
    },
    CategoryView: {
        screen: CategoryView,
        navigationOptions: {
            title: 'Category Details',
        }
    },
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 60 }
    }
});

export default HomeStack;