import React from 'react'
import { Field, ErrorMessage } from 'formik'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import './FormikField.scss'

import TextField from '@material-ui/core/TextField';
import { makeStyles, withStyles } from '@material-ui/core/styles'


// Experiments with nested styles.
const useStyles = makeStyles({
    underline: {
        '&:before': {
            borderColor: 'green !important',
        },
        '&:after': {
            borderColor: 'green !important',
        },
        // Also -> https://stackoverflow.com/a/59773661
        // Cool ::before, ::after examples -> https://www.youtube.com/watch?v=xoRbkm8XgfQ
        // Adding sass to cra -> https://scotch.io/tutorials/using-sass-in-create-react-app-v2


    },
    labelFocused: {
        color: 'green !important',
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
                        underline: classes.underline,
                    }

                }}
                InputLabelProps={{
                    classes: {
                        root: 'myStyles', // Access by CSS file
                        focused: classes.labelFocused // Access by myStyles
                    }
                }}
                FormHelperTextProps={{
                    classes: {
                        root: 'myStyles'
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