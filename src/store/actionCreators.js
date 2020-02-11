import HTTP from '../utils/http';
import { CHANGE_INPUT, GET_LIST } from './actionTypes';

export const getListActionCreator = list => ({
	type: GET_LIST,
	list
});

export const getListAction = () => {
	return async dispatch => {
		const { data } = await HTTP.get('/list');
		dispatch(getListActionCreator(data));
	};
};

export const inputChangeAction = e => ({
	type: CHANGE_INPUT,
	value: e.target.value
});

export const inputKeyUpAction = value => {
	return async dispatch => {
		const result = await HTTP.post('/add', {
			title: value,
			completed: false
		});
		if (result.status === 200) {
			dispatch(getListAction());
		}
	};
};

export const changeCheckboxAction = e => {
	return async dispatch => {
		const res = await HTTP.post('/modify', {
			id: e.currentTarget.dataset.id,
			completed: e.currentTarget.checked
		});
		if (res.status === 200) {
			// 修改完之后获取最新列表
			dispatch(getListAction());
		}
	};
};

export const delItemAction = e => {
	return async dispatch => {
		const res = await HTTP.get(`/del?id=${e.target.dataset.id}`);
		if (res.status === 200) {
			dispatch(getListAction());
		}
	};
};
