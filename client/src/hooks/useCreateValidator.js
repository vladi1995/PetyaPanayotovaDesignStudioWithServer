import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

const useValidatorCreate = () => {
    const [errors, setErrors] = useState({});
    const {user} = useContext(AuthContext);
    
    const [values, setValues] = useState({
        name: '',
        count: '',
        price: '',
        image: '',
        description: '',
        category: 'birthdayCard',
        ownerId: user._id,
    });

    const onChange = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value,
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

    const validateNumbers = (e) => {
        setErrors(state => ({
            ...state,
            [e.target.name]: values[e.target.name] <= 0,
        }));
    };

    const validateCount = (e) => {
        setErrors(state => ({
            ...state,
            [e.target.name]: !Number.isInteger(Number(values[e.target.name])) || values[e.target.name] <= 0,
        }));
    };


    return {
        values,
        errors,
        onChange,
        validateImageUrl,
        validateField,
        validateNumbers,
        validateCount,
    }
};

export default useValidatorCreate;