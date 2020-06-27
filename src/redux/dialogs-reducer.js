const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {

    switch(action.type) {
        case SEND_MESSAGE: 
        let body = action.newMessageBody;           
        return {
            ...state,
            messages: [...state.messages, {id: 6, message: body}]
        }
        default: 
            return state;    
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;