const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

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
        if (action.type === ADD_POST){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);    
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }
        else if (action.type === UPDATE_NEW_POST_TEXT){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
        else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state)
        }
        else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({id: 6, message: body});
            this._callSubscriber(this._state)
        }
    }
}


export const addPostActionCreator = () =>  ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text});

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body:body})

export  default store;
window.store = store;

