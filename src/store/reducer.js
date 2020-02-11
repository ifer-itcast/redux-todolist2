import { CHANGE_INPUT, GET_LIST } from './actionTypes';

const defaultState = {
	inputValue: '',
	list: []
};

const reducer = (state = defaultState, action) => {
	const newState = JSON.parse(JSON.stringify(state));
	switch (action.type) {
		case GET_LIST:
			newState.list = action.list;
			return newState;
		case CHANGE_INPUT:
			newState.inputValue = action.value;
			return newState;
		default:
			return state;
	}
};
export default reducer;
