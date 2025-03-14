export const addFriend = (friends, name) => {
    return [...friends, { id: Date.now(), name }];
};