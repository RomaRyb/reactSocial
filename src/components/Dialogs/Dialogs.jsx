import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';


const Dialogs = (props) => {

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

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = messages.map(m => <Message message={m.message} />)

    
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;