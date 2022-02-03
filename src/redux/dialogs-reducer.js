const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    dialogs: [
        { id : 1, name : 'Dimych'},
        { id : 2, name : 'Andrey'},
        { id : 3, name : 'Vasya'},
        { id : 4, name : 'Gleb'},
        { id : 5, name : 'Pasha'},
        { id : 6, name : 'Senya'},
    ],
    messages: [
        { id : 1, message : 'Hi'},
        { id : 2, message : 'How is your?'},
        { id : 3, message : 'Yo'},
        { id : 4, message : 'Yo'},
        { id : 5, message : 'Yo'}
    ],

}

const dialogsReducer = (state = initialState , action) => {
    switch (action.type){

        case ADD_MESSAGE: {
            let newMessage = {
                id: 6,
                message: action.newMessage
            };
            return {...state,
                messages: [...state.messages,newMessage],

            };
        }
        default:
            return state;

    }
}

export const addMessageActionCreator = (newMessage) => ({ type: ADD_MESSAGE, newMessage})

export default dialogsReducer;