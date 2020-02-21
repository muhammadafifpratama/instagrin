const initial_state = {
    authchecked: false,
};

export default (state = initial_state, action) => {
    switch (action.type) {
        case 'user_login_sukses':
            return { ...action.payload, authchecked: true };
        case 'user_login_gagal':
            return { authchecked: true };
        default: return state;
    }
}
