import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

let DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

let Message = (props) => {
    return (
        <div className={s.dialog}> {props.message} </div>
    )
}

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Roma'},
        {id: 1, name: 'Fanja'},
        {id: 1, name: 'Boltus'},
        {id: 1, name: 'Gippik'},
        {id: 1, name: 'Dukui'},
        {id: 1, name: 'Dimon'}
    ]

    let messagesData = [
        {id: 1, message: '"Yofff'},
        {id: 2, message: 'what up'},
        {id: 3, message: 'coooollll'},
        {id: 4, message: 'gogogogo'},
        {id: 5, message: 'waaaaaaiiiitt'}
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
            </div>
        </div>
    )
}

export default Dialogs;