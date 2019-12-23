const dummyUser = {
    nickname: 'jaden',
    Postings: [],
    Followings: ['yuri', 'mike'], 
    Followers: ['yuri'],
}

export const initialState = {
    isLoggedIn: false,
    user: null,
    signUpData: {},
};

export const LOG_IN = 'LOG_IN'; // action name
export const LOG_OUT  = 'LOG_OUT'; 
export const SIGN_UP = 'SIGN_UP';

export const signUpAction = (data) => {
    return {
        type: SIGN_UP,
        data: data,
    };
};

export const loginAction = {
    type: LOG_IN,
};

export const logoutAction = {
    type: LOG_OUT,
}

const reducer = ( state = initialState, action)  => {
    switch (action.type) {
        case LOG_IN: {
            return {
                ...state,
                isLoggedIn: true,
                user: dummyUser,
            }
        }
        case LOG_OUT: {
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            }
        }
        case SIGN_UP: {
            return {
                ...state,
                signUpData: action.data,
            }
        }
        default: {
            return {
                ...state,
            }
        }
    }
};

export default reducer;