import patientsInitialState from '../initialStates/patients'

const patientsReducer = (state = patientsInitialState, { payload, type }) => {
    switch (type) {
        case 'GET_PATIENTS':
        case 'CLEAN_PATIENTS':
            return {
                ...state,
                patients: payload
            }
        case 'CREATE_PATIENT':
            return {
                ...state,
                patients: [payload, ...state.patients]
            }
        case 'DELETE_PATIENT':
            return {
                ...state,
                patients: state.patients.filter(({ id }) => id !== payload)
            }
        case 'EDIT_PATIENT':
            return {
                ...state,
                patients: state.patients.map(patient => {
                    if (patient.id === payload.id) {
                        return payload
                    }
                    return patient
                })
            }
        default:
            return state
    }
}


export default patientsReducer
