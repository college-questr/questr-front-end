import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Reducer from './ReduxStore/Reducers';
import ApolloClient from 'apollo-boost';
import { gql } from "apollo-boost";
import { ApolloProvider } from '@apollo/react-hooks';
import 'semantic-ui-css/semantic.min.css'



const client = new ApolloClient({
    uri: 'https://questr-backend.herokuapp.com/graphql',
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    Reducer,
    composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render( <
    ApolloProvider client = { client } >
    <
    Provider store = { store } >
    <
    BrowserRouter >
    <
    App / >
    <
    /BrowserRouter> <
    /Provider> <
    /ApolloProvider>,
    document.getElementById('root'));