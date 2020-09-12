import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import "./SignUp.css"

import Button from '@material-ui/core/Button';
import FormikField from '../FormikField'
import FormikSelect from 'components/FormikSelect'

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
        .required('Required')
})

const SignUp = () => {

    const handleSubmit = (values) => {
        alert(JSON.stringify(values))
    }

    return (
        <div className="SignUp">
            <h1>Sign Up</h1>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    position: ''
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
                            <Button variant="contained" color="primary" disabled={!dirty || !isValid} type="submit">Submit</Button>
                        </Form>
                    )
                }}
            </Formik>
        </div>
    )
}

export default SignUp