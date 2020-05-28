import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import state, { addPost, subscribe, updateNewPostText } from './redux/state';

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
                <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />            
        </BrowserRouter>,document.getElementById('root'));
}

rerenderEntireTree(state);
subscribe(rerenderEntireTree);