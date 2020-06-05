const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
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
    newMessageBody: '',
}

const dialogsReducer = (state = initialState, action) => {

    switch(action.type) {
        case UPDATE_NEW_MESSAGE_BODY:            
        return {
            ...state,
            newMessageBody: action.body
        }
        case SEND_MESSAGE: 
        let body = state.newMessageBody;           
        return {
            ...state,
            newMessageBody: '',
            messages: [...state.messages, {id: 6, message: body}]
        }
        default: 
            return state;    
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;