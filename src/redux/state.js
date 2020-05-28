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
            ]
        },  
        sidebar: {}
    },
    getState () {
        return this._state;
    },
    _callSubscriber () {
        console.log('state has been changed');
    },
    addPost () {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);    
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText (newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    }
}

export  default store;
window.store = store;

