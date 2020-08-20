import axios from 'axios'
import { FETCH_ACTIVITIES } from './types'

export const fetchActivities = () => {
    return async (dispatch) => {
        const res = await axios.get('/feed')

        dispatch({type: FETCH_ACTIVITIES, feed: res.data})
    }
}