import React, { useEffect } from 'react'
import { useFormikContext, Formik, Form } from 'formik'
import * as Yup from 'yup'

import "./SignUp.css"

import Button from '@material-ui/core/Button';
import FormikField from '../FormikField'
import FormikSelect from 'components/FormikSelect'
import FormikRating from 'components/FormikRating';

const positionItems = [
    {
        label: 'Frontend',
        value: 'front-end',
    },
    {
        label: 'Backend',
        value: 'back-end',
    },
    {
        label: 'DevOps',
        value: 'dev-ops',
    },
    {
        label: 'QA',
        value: 'qa',
    },
]

const SignUpSchema = Yup.object().shape({
    email: Yup.string()
        .min(2, "Too Short!")
        .required('Required')
        .email('Must be a valid email!'),
    password: Yup.string()
        .min(8, "Too Short!")
        .required('Required'),
    position: Yup.string()
        .required('Required'),
    rate: Yup.string()
        .min(0.5)
        .max(5)
})

const SignUp = () => {

    const FormHandler = () => {

        // Way to subscribe form fields <- 
        // https://github.com/formium/formik/issues/1106
        // https://stackoverflow.com/questions/60194242/how-to-listen-for-changes-on-formik-field-with-nested-values

        // const { values } = useFormikContext()

        // useEffect(() => {
        //     values.rate = parseInt(values.rate) * 2
        // }, [values.rate])

        return null
    }

    const handleSubmit = (values) => {
        values.rate = parseInt(parseFloat(values.rate) * 2)
        alert(JSON.stringify(values))
    }

    return (
        <div className="SignUp">
            <h1>Sign Up</h1>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    position: '',
                    rate: 2.5,
                }}
                onSubmit={handleSubmit}
                validationSchema={SignUpSchema}
            >
                {props => {
                    // <Form> === <form onSubmit={props.handleSubmit}>

                    const { dirty, isValid } = props

                    return (
                        <Form>
                            <FormikField
                                name="email"
                                label="Email"
                            />
                            <FormikField
                                name="password"
                                label="Password"
                                type="password"
                            />
                            <FormikSelect
                                name="position"
                                label="Position"
                                items={positionItems}
                            />
                            <FormikRating
                                name="rate"
                            />
                            <Button
                                variant="contained"
                                color="secondary"
                                disabled={!dirty || !isValid}
                                type="submit"
                            >
                                Submit
                            </Button>
                            <FormHandler />
                        </Form>
                    )
                }}
            </Formik>
        </div>
    )
}

export default SignUp