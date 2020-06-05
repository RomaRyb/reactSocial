const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

let initialState = {
    users: [
        { id: 1, followed: false, fullName: 'Roma.R', status: 'want a gob', location: {country: 'Ukraine', city: 'Lviv'} },
        { id: 2, followed: true, fullName: 'Sasha', status: 'want a gob too', location: {country: 'Ukraine', city: 'Kyiv'} },
        { id: 3, followed: false, fullName: 'Vita', status: 'and i want a gob', location: {country: 'Ukraine', city: 'Chervonograd'} },
        
    ],
    newPostText: 'learnReact'
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW :
            return {
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.userId) {
                        return{...u, followed: true}
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.userId) {
                        return{...u, followed: false}
                    }
                    return u;
                })
            }
        default:
            return state;    
    } 
}

export const followAC = (userId) =>  ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId});

export default usersReducer;