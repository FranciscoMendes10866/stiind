import authInitialState from '../../initialStates/auth'

const LogOut = (history) => async (dispatch, getState) => {
    const stateToken = getState().auth.token
    console.log(stateToken)
    if (stateToken !== null) {
        dispatch({
            type: 'LOG_OUT',
            payload: authInitialState
        })
        history.push('/')
    }
}

export default LogOut