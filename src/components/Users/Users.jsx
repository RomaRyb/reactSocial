import React from 'react';

let Users = (props) => {
    return <div>
        {
            props.users.map( u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} alt={''} />
                    </div>
                    <div>
                        <button>Follow</button>
                    </div>
                </span>
                <span>
                    <div> { u.fullName } </div>
                    <div></div>
                </span>
            </div> )

        }
    </div>
    
}

export default Users;