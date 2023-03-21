import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import * as cardService from '../services/cardService';

const useValidatorEdit = (cardId) => {
    const [errors, setErrors] = useState({});

    const [values, setValues] = useState({
        name: '',
        count: '',
        price: '',
        image: '',
        description: '',
        category: '',
    });

    useEffect(() => {
        cardService.getOne(cardId)
            .then(result => {
                setValues(state => ({
                    name: result.card.name,
                    count: result.card.count,
                    price: result.card.price,
                    image: result.card.image,
                    description: result.card.description,
                    category: result.card.category,
                }));
            });
    }, [cardId]);

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

export default useValidatorEdit;