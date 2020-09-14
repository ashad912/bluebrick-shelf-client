import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchActivities } from 'store/actions'

import { List } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    list: props => {
        return {
            border: `1px solid ${theme.palette.secondary.main}`,
            [theme.breakpoints.up('sm')]: {
                borderColor: theme.palette.primary.main
            },
            width: props.cool ? '50%' : 'auto'
        }
    }
}))

export default (props) => {
    const activities = useSelector(state => state.activities)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchActivities())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const classes = useStyles(props)
    return (
        <div style={{ width: '100%' }} data-testid='feed_component'>

            <List className={classes.list} data-testid="feed_list">
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
            </List>
        </div>
    )
}

