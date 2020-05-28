import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { addPost, updateNewPostText } from './redux/state';


export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
        <React.StrictMode>
          <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </React.StrictMode>
    </BrowserRouter>,
      document.getElementById('root')
  );
}

