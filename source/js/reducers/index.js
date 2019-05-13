import { combineReducers } from 'redux';

import login from 'reducers/login';
import transfer from 'reducers/Transfer/transfer';

export default combineReducers({
	login,
	transfer
});
