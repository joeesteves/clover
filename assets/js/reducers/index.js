import { combineReducers } from 'redux'
import { lead } from './lead'
import { options } from './options'
import { step } from './steps'

export default combineReducers({
  lead,
  options,
  step
})
