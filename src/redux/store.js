import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                { id : 1, message : 'Привет, как ты?', likesCount: 15},
                { id : 2, message : 'Это мой мервый пост!', likesCount: 20}
            ],
            newPostText: 'React'
        },
        dialogsPage: {
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
            newMessageText: ''
        },
        sidebar:{
            friends: [
                { id : 1, name : 'Gleb'},
                { id : 2, name : 'Pasha'},
                { id : 3, name : 'Senya'},
                { id : 1, name : 'Gleb'},
                { id : 2, name : 'Pasha'},
                { id : 3, name : 'Senya'}
            ]

        }
    },
    _callSubscriber() {

    },

    getState(){
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action){ //type: 'ADD-POST'

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);

    }

}

export default store;