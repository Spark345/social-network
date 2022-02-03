import profileReducer, {addPostActionCreator} from "./profile-reducer";

let state = {
    posts: [
        { id : 1, message : 'Привет, как ты?', likesCount: 15},
        { id : 2, message : 'Это мой мервый пост!', likesCount: 20}
    ]
};

it('length of posts should be incremented', () => {
    // 1. тестовые данные
    let action = addPostActionCreator('Hello')
    // 2. action
    let newState = profileReducer(state,action);
    // 3. ожидаем получить
    expect(newState.posts.length).toBe(3);
});

it('message of new post should be correct', () => {
    // 1. тестовые данные
    let action = addPostActionCreator('Hello')
    // 2. action
    let newState = profileReducer( state,action);
    // 3. ожидаем получить
    expect(newState.posts[2].message).toBe('Hello');
});