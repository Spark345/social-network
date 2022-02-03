
let initialState = {
    friends: [
        { id : 1, name : 'Gleb'},
        { id : 2, name : 'Pasha'},
        { id : 3, name : 'Senya'},
        { id : 1, name : 'Gleb'},
        { id : 2, name : 'Pasha'},
        { id : 3, name : 'Senya'}
    ]
}

const sidebarReducer = (state = initialState, action ) => {
    return state;

}

export default sidebarReducer;