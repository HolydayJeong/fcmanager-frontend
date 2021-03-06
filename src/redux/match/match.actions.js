import MatchActionTypes from './match.types';
import axios from 'axios';
const url = 'http://68.132.136.143:5611/Match/2'; 

export const fetchMatchesStart = () => ({
    type: MatchActionTypes.FETCH_MATCHES_START
})

export const fetchMatchesSuccess = matchesMap => ({
    type: MatchActionTypes.FETCH_MATCHES_SUCCESS,
    payload: matchesMap
})

export const fetchMatchesFailure = errorMessage => ({
    type: MatchActionTypes.FETCH_MATCHES_FAILURE,
    payload: errorMessage
})

export const fetchMatchesStartAsync = () => {
    return dispatch => {
        dispatch(fetchMatchesStart());

        const matchRes = axios.get(url)
            .then(res => {
                dispatch(fetchMatchesSuccess(res.data));
            })
            .catch(error => dispatch(fetchMatchesFailure(error.message)));
    }
}