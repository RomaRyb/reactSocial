const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        { id: 1, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTXdbWq30YVnQwjxpAe1vA4n9lD-JO5uM3V3RmQHq1diaxs1WF4&usqp=CAU', followed: false, fullName: 'Roma.R', status: 'want a gob', location: {country: 'Ukraine', city: 'Lviv'} },
        { id: 2, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTXdbWq30YVnQwjxpAe1vA4n9lD-JO5uM3V3RmQHq1diaxs1WF4&usqp=CAU', followed: true, fullName: 'Sasha', status: 'want a gob too', location: {country: 'Ukraine', city: 'Kyiv'} },
        { id: 3, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTXdbWq30YVnQwjxpAe1vA4n9lD-JO5uM3V3RmQHq1diaxs1WF4&usqp=CAU', followed: false, fullName: 'Vita', status: 'and i want a gob', location: {country: 'Ukraine', city: 'Chervonograd'} },
        
    ],
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

        case SET_USERS:
            return {
                ...state, users: [ ...state.users, ...action.users ]
            }    
        default:
            return state;    
    } 
}

export const followAC = (userId) =>  ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({ type: SET_USERS, users});

export default usersReducer;