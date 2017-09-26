import { AsyncStorage } from 'react-native';
import axios from 'axios';
import { API_URL } from '../config';
import {
	SOURCES_FOUND,
	SOURCES_NOT_FOUND,
	FETCH_SOURCES_START,
	FETCH_SOURCES_SUCCESS,
	FETCH_SOURCES_FAIL,
	CHANGE_CURRENT_SOURCE_TAB,
	FETCH_NEWSLIST_START,
	FETCH_NEWSLIST_SUCCESS,
	FETCH_NEWSLIST_FAIL
} from './types';

export const checkSources = () => async dispatch => {
	try {
		//await AsyncStorage.removeItem('sources');
		let sources = await AsyncStorage.getItem('sources');
		console.log("Sources: ",sources);
		if(sources) {
			dispatch({ type: SOURCES_FOUND, payload: JSON.parse(sources) });
		} else {
			dispatch({ type: SOURCES_NOT_FOUND, payload: '' });
		}
	}
	catch(err) {
		dispatch({ type: SOURCES_NOT_FOUND, payload: '' });
	}
}

export const getSources = () => async dispatch => {
	try {
		dispatch({ type: FETCH_SOURCES_START, payload: '' });
		let response = await axios.get(API_URL + '/sources');
		dispatch({ type: FETCH_SOURCES_SUCCESS, payload: response.data.sources});
	}
	catch(err) {
		dispatch({ type: FETCH_SOURCES_FAIL, payload: 'Error occured during fetching the sources.'});
	}
}

export const setSources = (sources) => async dispatch => {
	try {
		await AsyncStorage.setItem('sources', JSON.stringify(sources));
		dispatch({ type: SOURCES_FOUND, payload: sources});
	}
	catch(err) {
		console.log(err);
		dispatch({ type: SOURCES_NOT_FOUND, payload: '' })	
	}
}

export const setSourceTab = (source) => {
	console.log("setSourceTab called with ",source);
	return {
		type: CHANGE_CURRENT_SOURCE_TAB,
		payload: source
	};
}

export const getNewsList = (source) => async dispatch => {
	try {
		console.log("getNewsList called with ",source);
		dispatch({ type: FETCH_NEWSLIST_START, payload: '' });
		let response = await axios.get(API_URL + '/articles?source=' + source.id);
		console.log(response.data);
		dispatch({ type: FETCH_NEWSLIST_SUCCESS, payload: response.data.articles});
	}
	catch(err) {
		dispatch({ type: FETCH_NEWSLIST_FAIL, payload: 'Error occured during fetching the articles.'});
	}
}