import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={`${s.dialog} ${s.active}`}>
                    <NavLink to="/dialogs/1">Roma</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2">Fanja</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3">Boltus</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4">Gippik</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/5">Dukui</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>yofff</div>
                <div className={s.message}>what's up</div>
                <div className={s.message}>coooollll</div>
            </div>
        </div>
    )
}

export default Dialogs;