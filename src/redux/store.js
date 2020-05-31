import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import sidebarReducer from './sidebar-reducer';


let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'hi what\'s up?', likesCount: 11 },
                { id: 2, message: 'yo, newer better', likesCount: 18 },
                { id: 3, message: 'yo, newer better', likesCount: 18 },
                { id: 4, message: 'yo, newer better', likesCount: 18 }
            ],
            newPostText: 'learnReact'    
        },
        dialogsPage: {
            messages : [
                { id: 1, message: '"Yofff' },
                { id: 2, message: 'what up' },
                { id: 3, message: 'coooollll' },
                { id: 4, message: 'gogogogo' },
                { id: 5, message: 'waaaaaaiiiitt' }
            ],
            dialogs: [
                { id: 1, name: 'Roma' },
                { id: 2, name: 'Fanja' },
                { id: 3, name: 'Boltus' },
                { id: 4, name: 'Gippik' },
                { id: 5, name: 'Dukui' },
                { id: 6, name: 'Dimon' }
            ],
            newMessageBody: '',
        },  
        sidebar: {}
    },
    _callSubscriber () {
        console.log('state has been changed');
    },

    getState () {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);

    }
}


export  default store;
window.store = store;

