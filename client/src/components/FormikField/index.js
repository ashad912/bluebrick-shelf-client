import React from 'react'
import { Field, ErrorMessage } from 'formik'
import PropTypes from 'prop-types'
import './FormikField.css'

import TextField from '@material-ui/core/TextField';
import { makeStyles, withStyles } from '@material-ui/core/styles'


// Experiments with nested styles.
const useStyles = makeStyles({
    underline: {
        '&:before': {
            borderColor: 'green',
            '&:hover': {
                borderColor: 'green'
            },
        },
        '&:after': {
            borderColor: 'green',
            '&:hover': {
                borderColor: 'green'
            },
        },
        '&:hover:not': {
            borderColor: 'green'
        },


    }
})


const FormikField = props => {
    const { name, label, type = 'text', required = false } = props
    // as={TextField} takes all props passed to Field, and uses as key-value pairs
    const classes = useStyles()
    return (
        <div className="FormikField">
            <Field
                color="secondary"
                autoComplete="off"
                name={name}
                as={TextField}
                label={label}
                type={type}
                fullWidth
                helperText={<ErrorMessage name={name} />}
                required={required}
                // Experiments with nested styles.
                InputProps={{
                    classes: {
                        underline: classes.underline
                    }

                }}

            />
        </div>
    )
}

FormikField.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    required: PropTypes.bool
}

export default FormikField