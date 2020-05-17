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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Roma" id="1" />
                <DialogItem name="Fanja" id="2" />
                <DialogItem name="Boltus" id="3" />
                <DialogItem name="Gippik" id="4" />
                <DialogItem name="Dukui" id="5" />
                <DialogItem name="Dimon" id="6" />
            </div>
            <div className={s.messages}>
                <Message message="Yofff" />
                <Message message="what's up" />
                <Message message="coooollll" />
            </div>
        </div>
    )
}

export default Dialogs;