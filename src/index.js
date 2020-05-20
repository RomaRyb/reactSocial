import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';


let posts = [
  {id: 1, message: 'hi what\'s up?', likesCount: 11},
  {id: 2, message: 'yo, newer better', likesCount: 18},
  {id: 3, message: 'yo, newer better', likesCount: 18},
  {id: 4, message: 'yo, newer better', likesCount: 18}
]

let dialogs = [
  { id: 1, name: 'Roma' },
  { id: 2, name: 'Fanja' },
  { id: 3, name: 'Boltus' },
  { id: 4, name: 'Gippik' },
  { id: 5, name: 'Dukui' },
  { id: 6, name: 'Dimon' }
]

let messages = [
  { id: 1, message: '"Yofff' },
  { id: 2, message: 'what up' },
  { id: 3, message: 'coooollll' },
  { id: 4, message: 'gogogogo' },
  { id: 5, message: 'waaaaaaiiiitt' }
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} messages={messages} dialogs={dialogs} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
