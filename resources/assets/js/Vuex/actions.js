// An action will receive the store as the first argument.
// Since we are only interested in the dispatch (and optionally the state)
// We can pull those two parameters using the ES6 destructuring feature

export const setInvitations = makeAction('SET_INVITATIONS');
export const incrementInvitations = makeAction('INCREMENT');

function makeAction (type) {
    return function ({ dispatch }, ...args) {
        dispatch(type, ...args)
    };
    //return ({ dispatch }, ...args) => dispatch(type, ...args)
}