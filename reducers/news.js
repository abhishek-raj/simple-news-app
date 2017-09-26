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
} from '../actions/types';

const INITIAL_STATE = {};
export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		case SOURCES_FOUND:
			return { ...state, sources: action.payload, sourcesNotFound: false };
		case SOURCES_NOT_FOUND:
			return { ...state, sourcesNotFound: true };
		case FETCH_SOURCES_START:
			return { ...state, allSources: [], showLoading: true, errorMessage: '', sourcesNotFound: false };
		case FETCH_SOURCES_SUCCESS:
			return { ...state, allSources: action.payload, showLoading: false, errorMessage: '', sourcesNotFound: false };
		case FETCH_SOURCES_FAIL:
			return { ...state, allSources: [], showLoading: false, errorMessage: action.payload, sourcesNotFound: false };
		case CHANGE_CURRENT_SOURCE_TAB:
			return { ...state, currentSource: action.payload };	
		case FETCH_NEWSLIST_START:
			return { ...state, newslistLoading: true, errorMessage: '' };
		case FETCH_NEWSLIST_SUCCESS:
			return { ...state, newslistLoading: false, newsList: action.payload, errorMessage: '' };
		case FETCH_NEWSLIST_FAIL:
			return { ...state, newslistLoading: false, errorMessage: action.payload };
		default:
			return state;
	}
}