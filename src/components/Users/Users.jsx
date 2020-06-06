import React from 'react';
import styles from './Users.module.css';

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1, photoUrl: 'https://image.winudf.com/v2/image/Y29tLkZyZWVHYW1lc1Byb2QuU2FzdWtlVWNoaWhhX3NjcmVlbl8wXzE1MDU0MTc1MTRfMDM2/screen-0.jpg?fakeurl=1&type=.jpg',
                followed: false, fullName: 'Roma.R', status: 'want a gob', location: { country: 'Ukraine', city: 'Lviv' }
            },
            {
                id: 2, photoUrl: 'https://image.winudf.com/v2/image/Y29tLkZyZWVHYW1lc1Byb2QuU2FzdWtlVWNoaWhhX3NjcmVlbl8wXzE1MDU0MTc1MTRfMDM2/screen-0.jpg?fakeurl=1&type=.jpg',
                followed: true, fullName: 'Sasha', status: 'want a gob too', location: { country: 'Ukraine', city: 'Kyiv' }
            },
            {
                id: 3, photoUrl: 'https://image.winudf.com/v2/image/Y29tLkZyZWVHYW1lc1Byb2QuU2FzdWtlVWNoaWhhX3NjcmVlbl8wXzE1MDU0MTc1MTRfMDM2/screen-0.jpg?fakeurl=1&type=.jpg',
                followed: false, fullName: 'Vita', status: 'and i want a gob', location: { country: 'Ukraine', city: 'Chervonograd' }
            },
    
        ])
    }    

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} alt={''} className={styles.userPhoto} />
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => { props.unfollow(u.id) }} >Unfollow</button> :
                            <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <div> {u.fullName} </div>
                    <div> {u.status} </div>
                </span>
                <span>
                    <div> {u.location.country} </div>
                    <div> {u.location.city} </div>
                </span>
            </div>)

        }
    </div>

}

export default Users;