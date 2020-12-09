
import { combineReducers } from 'redux'

import authReducer from './authReducer'
import patientsReducer from './patientsReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    patients: patientsReducer,
})

export default rootReducer
