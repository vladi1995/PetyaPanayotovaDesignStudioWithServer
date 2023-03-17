import { useState, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import useValidatorLogin from '../../../hooks/userValidatorLogin';
import { AuthContext } from "../../../contexts/AuthContext";
import * as authService from "../../../services/authService";

import './Login.css';

import styles from '../Auth.module.css';

const Login = () => {
    const { userLogin } = useContext(AuthContext);
    const { values, errors, onChange, validateEmail, validateField } = useValidatorLogin();
    const [serverError, setServerError] = useState('');
    const navigate = useNavigate();

    const submitLoginHandler = (e) => {
        e.preventDefault();

        authService.login(values.email, values.password)
            .then(authData => {
                userLogin(authData);
                navigate('/');
            })
            .catch((err) => {
                setServerError(err.message);
            });
    };

    return (
        <section className="u-align-center u-clearfix u-grey-5 u-section-2" id="sec-71fc">
            <div className="u-clearfix u-sheet u-sheet-1">
                <h2 className="u-text u-text-default u-text-1">Вход в системата</h2>
                <div className="u-form u-form-1">
                    <form
                        onSubmit={submitLoginHandler}
                        className="u-clearfix u-form-spacing-15 u-form-vertical u-inner-form"
                        style={{ "padding": " 10px" }}
                        source="email"
                        name="form"
                    >
                        <div className="u-form-group u-form-name u-label-top">
                            <label htmlFor="name-3b9a" className="u-label">Email:</label>
                            <input
                                onChange={onChange}
                                value={values.email}
                                onBlur={(e) => validateEmail(e, 5)}
                                type="text"
                                placeholder="Въведете email"
                                id="name-3b9a"
                                name="email"
                                className={
                                    errors.email || serverError ? `${styles['error']} u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-white u-input-1`
                                        : "u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-white u-input-1"
                                }
                                required="required"
                            />
                        </div>
                        <div className="u-form-group u-label-top">
                            <label htmlFor="email-3b9a" className="u-label">Парола:</label>
                            <input
                                onChange={onChange}
                                value={values.password}
                                onBlur={(e) => validateField(e, 5)}
                                type="password"
                                placeholder="Въведете парола"
                                id="email-3b9a"
                                name="password"
                                className={
                                    errors.password || serverError ? `${styles['error']} u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-white u-input-2`
                                        : "u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-white u-input-2"
                                }
                                required="required" />
                            {(serverError || errors.email || errors.password) && <p style={{ color: 'red' }}>/Невалидни email или парола!/</p>}
                        </div>

                        <div className="u-align-left u-form-group u-form-submit u-label-top">
                            <input type="submit" value="Вход" className="u-btn u-btn-submit u-button-style" />
                        </div>
                    </form>
                </div>
                <p className="u-text u-text-default u-text-2">Нямате все още акаунт?</p>
                <NavLink to="/auth/register"
                    className="u-active-none u-border-2 u-border-no-left u-border-no-right u-border-no-top u-border-palette-1-base u-bottom-left-radius-0 u-bottom-right-radius-0 u-btn u-btn-rectangle u-button-style u-hover-none u-none u-radius-0 u-top-left-radius-0 u-top-right-radius-0 u-btn-2">Регистрирай
                    се</NavLink>
            </div>
        </section>
    );
};

export default Login;