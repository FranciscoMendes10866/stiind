import authInitialState from '../../initialStates/auth'
import patientsInitialState from '../../initialStates/patients'

const LogOut = (history) => async (dispatch, getState) => {
    const stateToken = getState().auth.token
    if (stateToken !== null) {
        dispatch({
            type: 'LOG_OUT',
            payload: authInitialState
        })
        dispatch({
            type: 'CLEAN_PATIENTS',
            payload: patientsInitialState
        })
        history.push('/')
    }
}

export default LogOut
