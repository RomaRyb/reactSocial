import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.dialog}> {props.message} </div>
    )
}

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Roma'},
        {id: 2, name: 'Fanja'},
        {id: 3, name: 'Boltus'},
        {id: 4, name: 'Gippik'},
        {id: 5, name: 'Dukui'},
        {id: 6, name: 'Dimon'}
    ]    

    let messagesData = [
        {id: 1, message: '"Yofff'},
        {id: 2, message: 'what up'},
        {id: 3, message: 'coooollll'},
        {id: 4, message: 'gogogogo'},
        {id: 5, message: 'waaaaaaiiiitt'}
    ]

    let dialogsElements = dialogsData.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = messagesData.map(m => <Message message={m.message} />)

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