import { applyMiddleware, createStore} from 'redux'
import logger from 'redux-logger'
import rootReducer from './root-reducer'

const middlewares =[logger]; //we are doing this in this way so in future we can easily add additional middlewares
const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store;