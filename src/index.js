import './index.css';
import state from './redux/state';
import { rerenderEntireTree } from './render';
import * as serviceWorker from './serviceWorker';

rerenderEntireTree(state);



serviceWorker.unregister(state);
