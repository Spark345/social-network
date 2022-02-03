import dialogsReducer, {addMessageActionCreator} from "./dialogs-reducer";

let state = {
    messages: [
        { id : 1, message : 'Hi'},
        { id : 2, message : 'How is your?'},
        { id : 3, message : 'Yo'},
        { id : 4, message : 'Yo'},
        { id : 5, message : 'Yo'}
    ]
}

it('add message', () => {
    let action = addMessageActionCreator('Yo');

    let newState = dialogsReducer(state, action);

    expect(newState.messages.length).toBe(6);
});

it('text message', () => {
    let action = addMessageActionCreator('Yo');

    let newState = dialogsReducer(state, action);

    expect(newState.messages[5].message).toBe('Yo');
});

