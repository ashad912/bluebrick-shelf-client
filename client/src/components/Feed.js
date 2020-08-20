import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchActivities } from 'store/actions'


export default () => {
    const activities = useSelector(state => state.activities)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchActivities())
    }, [])


    return (
        <div data-testid='feed_component'>

            <ul data-testid="feed_list">
                <React.Fragment>
                    {activities.map((activity, index) => {
                        return (
                            <li key={index} data-testid='activity'>
                                <p>{activity.bookName} was ranked!</p>
                                <p>Rank: {activity.rank}</p>
                                {activity.review && <p>Review: {activity.review}</p>}
                            </li>
                        )
                    })}
                </React.Fragment>
            </ul>
        </div>
    )
}

