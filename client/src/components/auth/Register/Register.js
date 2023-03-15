import { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { AuthContext } from "../../../contexts/AuthContext";
import * as authService from '../../../services/authService';

import './Register.css';
import styles from '../Auth.module.css';

const Register = () => {
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const { userLogin } = useContext(AuthContext);

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

    const submitLoginHandler = (e) => {
        e.preventDefault();

        authService.register(values.email, values.password, values.firstName, values.lastName, values.profileImageUrl, values.budget)
            .then(authData => {
                userLogin(authData);
                navigate('/');
            }).catch(() => {
                navigate('/');
            });
    };

    const validateEmail = (e, bound) => {
        const pattern = /[\w+]+[@][\w+]+[.][\w+]+/g;
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

    return (
        <section className="u-align-center u-clearfix u-grey-5 u-section-3" id="sec-fc27">
            <div className="u-clearfix u-sheet u-sheet-1">
                <h2 className="u-text u-text-default u-text-1">Регистрация</h2>
                <div className="u-form u-form-1">
                    <form
                        className="u-clearfix u-form-spacing-15 u-form-vertical u-inner-form"
                        style={{ "padding": "10px" }}
                        name="form" onSubmit={submitLoginHandler}>
                        <div className="u-form-group u-form-name u-label-top">
                            <label htmlFor="name-3b9a" className="u-label">Email:</label>

                            <input
                                onBlur={(e) => validateEmail(e, 5)}
                                onChange={onChange} value={values.email}
                                type="text"
                                placeholder="Въведете email"
                                id="name-3b9a"
                                name="email"
                                className=
                                {
                                    errors.email ? `${styles['error']} u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-white u-input-1`
                                        : "u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-white u-input-1"
                                }
                                required="required"
                            />
                            {errors.email && <span>/Email трябва да е поне 5 символа и да е във формат name@domain.extension/</span>}
                        </div>

                        <div className="u-form-group u-label-top">
                            <label htmlFor="email-3b9a" className="u-label">Име:</label>

                            <input
                                onBlur={(e) => validateField(e, 5)}
                                onChange={onChange}
                                value={values.firstName}
                                type="text"
                                placeholder="Въведете име"
                                id="email-3b9a"
                                name="firstName"
                                className=
                                {
                                    errors.firstName ? `${styles['error']} u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-white u-input-2`
                                        : "u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-white u-input-2"
                                }
                                required="required"
                            />
                            {errors.firstName && <span>/Името трябва да е поне 5 символа!/</span>}
                        </div>
                        <div className="u-form-group u-label-top u-form-group-3">
                            <label htmlFor="text-f937" className="u-label">Фамилия:</label>

                            <input
                                onBlur={(e) => validateField(e, 5)}
                                onChange={onChange}
                                value={values.lastName}
                                type="text"
                                placeholder="Въведете фамилия"
                                id="text-f937"
                                name="lastName"
                                className=
                                {
                                    errors.lastName ? `${styles['error']} u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-white u-input-3`
                                        : "u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-white u-input-3"
                                }
                                required="required"
                            />
                            {errors.lastName && <span>/Фамилията трябва да е поне 5 символа!/</span>}
                        </div>
                        <div className="u-form-group u-label-top u-form-group-4">
                            <label htmlFor="text-d5ae" className="u-label">Парола:</label>

                            <input
                                onBlur={(e) => validateField(e, 5)}
                                onChange={onChange}
                                value={values.password}
                                type="password"
                                placeholder="Въведете парола"
                                id="text-d5ae"
                                name="password"
                                className=
                                {
                                    errors.password ? `${styles['error']} u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-white u-input-4`
                                        : "u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-white u-input-4"
                                }
                                required="required"
                            />
                            {errors.password && <span>/Паролата трябва да е поне 5 символа!/</span>}
                        </div>
                        <div className="u-form-group u-label-top u-form-group-5">
                            <label htmlFor="text-a271" className="u-label">Потвърди паролата</label>

                            <input
                                onBlur={validatePassword}
                                onChange={onChange}
                                value={values.repeatPassword}
                                type="password"
                                placeholder="Въведете паролата отново"
                                id="text-a271"
                                name="repeatPassword"
                                className=
                                {
                                    errors.repeatPassword ? `${styles['error']} u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-white u-input-5`
                                        : "u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-white u-input-5"
                                }
                                required="required"
                            />
                            {errors.repeatPassword && <span>/Двете пароли трябва да съвпадат!/</span>}
                        </div>
                        <div className="u-form-group u-label-top u-form-group-6">
                            <label htmlFor="text-1f9b" className="u-label">Профилна снимка</label>
                            <input
                                onBlur={validateImageUrl}
                                onChange={onChange}
                                value={values.profileImageUrl}
                                type="text"
                                id="text-1f9b"
                                name="profileImageUrl"
                                placeholder="Въведете линк за профилна снимка"
                                className=
                                {
                                    errors.profileImageUrl ? `${styles['error']} u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-white u-input-6`
                                        : "u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-white u-input-6"
                                }
                                required="required"
                            />
                            {errors.profileImageUrl && <span>/Линкът към снимката трябва да започва с http/https!/</span>}
                        </div>
                        <div className="u-form-group u-form-number u-form-number-layout-number u-label-top u-form-group-7">
                            <label htmlFor="number-03dd" className="u-label">Въведете бюджет в лв.</label>
                            <div className="u-input-row" data-value="0">
                                <input
                                    onBlur={validateBudget}
                                    onChange={onChange}
                                    value={values.budget}
                                    min="0"
                                    step="1"
                                    type="number"
                                    placeholder=""
                                    id="number-03dd"
                                    name="budget"
                                    className=
                                    {
                                        errors.budget ? `${styles['error']} u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-white u-input-7`
                                            : "u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-white u-input-7"
                                    }
                                    required="required"
                                />
                                {errors.budget && <span> /Бюджетът трябва да е по-голям от 0лв!/</span>}
                            </div>
                        </div>
                        <div className="u-align-left u-form-group u-form-submit u-label-top">
                            <input disabled={Object.values(errors).some(x => x == true) || Object.values(values).some(x => x === '' || x === 0)} type="submit" value="Регистрация" className="u-btn u-btn-submit u-button-style" />
                        </div>
                    </form>
                </div>
                <p className="u-text u-text-2">Вече имате акаунт?</p>
                <NavLink to="/auth/login"
                    className="u-active-none u-border-2 u-border-no-left u-border-no-right u-border-no-top u-border-palette-1-base u-bottom-left-radius-0 u-bottom-right-radius-0 u-btn u-btn-rectangle u-button-style u-hover-none u-none u-radius-0 u-top-left-radius-0 u-top-right-radius-0 u-btn-2">Вход</NavLink>
            </div>
        </section>
    );
};

export default Register;