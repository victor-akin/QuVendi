/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import { Provider } from "react-redux";

// graphql imports
import { ApolloProvider } from 'react-apollo';
import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost';

import store from "./src/store";
import App from './App';
import {name as appName} from './app.json';
import { QUVENDI_LOCAL, QUVENDI_HEROKU } from './appConfig';


const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({uri: QUVENDI_LOCAL.URL })
});


const QuVendi = function(){

    return(
        <Provider store={store}>
            <ApolloProvider client={client}>
                <App />
            </ApolloProvider>
        </Provider>
    )
}


AppRegistry.registerComponent(appName, () => QuVendi);
