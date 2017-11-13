import { combineReducers } from 'redux'
import postsBySubreddit from './postsBySubreddit'
import selectedSubreddit from './selectedSubreddit'

const reducer = combineReducers({
  postsBySubreddit,
  selectedSubreddit
})

export default reducer