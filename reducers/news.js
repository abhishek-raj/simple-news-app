import {
} from '../actions/types';

const INITIAL_STATE = {};
export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		case 'PASSWORD_SIGNIN_CHANGED':
			return { ...state, passwordSignin: action.payload, errorMessage: '' }
		default:
			return state;
	}
}