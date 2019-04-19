/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/es/integration/react";
import configureStore from './src/Store/configureStore';
const {store, persistor} = configureStore();

const RNRedux = () => (
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
