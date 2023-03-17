import { useState } from "react";

const useValidatorLogin = () => {
    const [errors, setErrors] = useState({
        email: '',
        password: '',
    });

    const [values, setValues] = useState({
        email: '',
        password: '',
    });

    const validateEmail = (e, bound) => {
        const pattern = /[\w+]+[@][\w+]+[.][\w+]+/g;
        setErrors(state => ({
            ...state,
            [e.target.name]:
                ((values[e.target.name].trim()).length < bound || !pattern.exec(values[e.target.name]))
        }));
    };

    const validateField = (e, bound) => {
        setErrors(state => ({
            ...state,
            [e.target.name]: (values[e.target.name]).trim().length < bound
        }));
    };

    const onChange = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    return {
        values,
        errors,
        onChange,
        validateEmail,
        validateField,
    }
};

export default useValidatorLogin;