import React from 'react';
import s from'./Navbar.module.css'
console.log(s);

// let s = {
//     'nav': 'Navbar_nav__2jCdr',
//     'item': 'Navbar_item__1odmO'
// }


const Navbar = () => {
    return <nav className={s.nav}>
        <div className={s.item}><a className={`${s.item} ${s.active}`} href="#1">Profile</a></div>
        <div className={s.item}><a href="#2">Messages</a></div>
        <div className={s.item}><a  href="#3">News</a></div>
        <div className={s.item}><a href="#4">Music</a></div>
        <div className={`${s.item} ${s.active}`}><a href="#5">Settings</a></div>
</nav>
}

export default Navbar;

