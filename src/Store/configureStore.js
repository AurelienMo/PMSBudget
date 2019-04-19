import {applyMiddleware, createStore} from 'redux';
import storage from 'redux-persist/lib/storage'
import {persistCombineReducers, persistStore} from "redux-persist";
import {composeWithDevTools} from 'remote-redux-devtools';
import cguReducer from '../Reducers/cguReducer.js';

const rootPersistConfig = {
    key: 'root',
    storage: storage
};

export default () => {
    let store = createStore(
        persistCombineReducers(
            rootPersistConfig,
            {
                cguReducer
            },
            {},
            composeWithDevTools(applyMiddleware())
        )
    );
    let persistor = persistStore(store);
    //Uncomment following line to purge global state
    // persistor.purge();
    return {store, persistor};
}