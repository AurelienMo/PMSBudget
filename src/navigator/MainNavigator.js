import {createAppContainer, createSwitchNavigator, createStackNavigator} from 'react-navigation';
import React from 'react';
import CGUScreenView from "../views/screens/CGUScreenView";
import HomeScreenView from "../views/screens/HomeScreenView";
import Header from "../views/components/Header";
import AuthenticateScreenView from "../views/screens/AuthenticateScreenView";

const CGUNavigator = createStackNavigator({
    CGU: {
        screen: CGUScreenView,
        navigationOptions: {
            headerTitle: (
                <Header title="Condition d'utilisation"/>
            )
        }
    }
});

const HomeNavigator = createStackNavigator({
    Home: {
        screen: HomeScreenView,
        navigationOptions: {
            headerTitle: (
                <Header title="Accueil"/>
            )
        }
    },
    Authenticate: {
        screen: AuthenticateScreenView
    }
});

const RootNavigator = createSwitchNavigator({
    CGU: {
        screen: CGUNavigator,
    },
    Home: {
        screen: HomeNavigator,
    }
});

export default createAppContainer(RootNavigator);