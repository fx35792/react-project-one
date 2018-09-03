import {combineReducers} from 'redux';
import {user} from './user.redux';
import {chatuser} from './chatuser.redux';

const reducer = combineReducers({
    user,
    chatuser
});
export default reducer;