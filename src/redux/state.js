let rerenderEntireTree = () => {
    console.log('state has been changed');
}

let state = {
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
}

window.state = state;

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);    
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
} 

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export  default state;
