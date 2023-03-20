import { useState } from "react";

const useValidatorRegister = () => {
    const [errors, setErrors] = useState({});

    const [values, setValues] = useState({
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        repeatPassword: '',
        profileImageUrl: '',
        budget: 0,
    });

    const onChange = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    const validateEmail = (e, bound) => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;
        setErrors(state => ({
            ...state,
            [e.target.name]:
                ((values[e.target.name].trim()).length < bound || !pattern.exec(values[e.target.name]))
        }));
    };

    const validatePassword = (e) => {
        setErrors(state => ({
            ...state,
            [e.target.name]: values.password !== values[e.target.name],
        }));
    };

    const validateImageUrl = (e) => {
        setErrors(state => ({
            ...state,
            [e.target.name]: (!values[e.target.name].startsWith('http') && !values[e.target.name].startsWith('https')),
        }));
    };

    const validateField = (e, bound) => {
        setErrors(state => ({
            ...state,
            [e.target.name]: (values[e.target.name]).trim().length < bound
        }));
    };

    const validateBudget = (e) => {
        setErrors(state => ({
            ...state,
            [e.target.name]: values[e.target.name] <= 0,
        }));
    };


    return {
        values,
        errors,
        onChange,
        validateEmail,
        validatePassword,
        validateImageUrl,
        validateField,
        validateBudget
    }
};

export default useValidatorRegister;