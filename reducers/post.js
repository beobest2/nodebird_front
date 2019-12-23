export const initialState = {
    mainPosts: [{
        id: 1,
        User:{
            id: 1,
            nickname: 'jaden'
        },
        content: 'first topic',
        img: 'https://images.unsplash.com/photo-1576460303646-1b9493abfd35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
    }],
    imagePaths: [],
};

export const ADD_POST = 'ADD_POST';
export const ADD_DUMMY = 'ADD_DUMMY';

const addPost = {
    type: ADD_POST,
};

const addDummy = {
    type: ADD_DUMMY,
    data: {
        content: 'Hello',
        UserId: 1,
        User: {
            nickname: 'jaden',
        },
    },
};

const reducer =  (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
            };
        }
        case ADD_DUMMY: {
            return {
                ...state,
                mainPosts: [action.data, ...state.mainPosts]
            };
        }
        default: {
            return {
                ...state,
            }
        }
    }
}

export default reducer;