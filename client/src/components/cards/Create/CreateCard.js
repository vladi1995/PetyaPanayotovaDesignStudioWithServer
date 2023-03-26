import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import useValidatorCreate from '../../../hooks/useCreateValidator';

import { CardContext } from '../../../contexts/CardContext';
import { AuthContext } from '../../../contexts/AuthContext';
import * as cardService from '../../../services/cardService';
import * as userService from '../../../services/userService';

import './Create.css';
import styles from '../Card.module.css';

import DropboxChooser from 'react-dropbox-chooser';
const APP_KEY = 'thwqp35vo5cl07d';

const CreateCard = () => {
    const navigate = useNavigate();
    const { addCard } = useContext(CardContext);
    const { user } = useContext(AuthContext);

    const { values, errors, onChange, validateImageUrl, validateField, validateNumbers, validateCount } = useValidatorCreate();
    const [serverError, setServerError] = useState('');
    const [currentUser, setCurrentUser] = useState({});

    useEffect(() => {
        userService.getOne(user._id)
            .then(result => setCurrentUser(result));
    }, []);

    const createCardHandler = (e) => {
        e.preventDefault();
        cardService.create(values)
            .then(result => {
                addCard(result);
                navigate('/cards/catalog');
            }).catch((err) => {
                setServerError(err.message);
            });
    };

    function handleSuccess(files) {
        values.image = files[0].link;
    }

    return (
        <section className="u-align-center u-clearfix u-grey-5 u-section-10" id="sec-7464">
            <div className="u-clearfix u-sheet u-sheet-1">
                <h2 className="u-text u-text-default u-text-1">Create new card</h2>
                <div className="u-form u-form-1">
                    <form
                        className="u-clearfix u-form-spacing-15 u-form-vertical u-inner-form"
                        style={{ padding: "10px" }}
                        source="email"
                        name="form"
                        onSubmit={createCardHandler}
                    >
                        <div className="u-form-group u-form-name u-label-top">
                            <label htmlFor="name-3b9a" className="u-label">Name</label>
                            <input
                                type="text"
                                onChange={onChange}
                                onBlur={(e) => validateField(e, 5)}
                                value={values.name}
                                placeholder="Enter name of your card"
                                id="name-3b9a"
                                name="name"
                                className=
                                {
                                    errors.name
                                        ?
                                        `${styles['error']} u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-white u-input-1`
                                        :
                                        "u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-white u-input-1"
                                }
                                required="required"
                            />
                            {errors.name && <span>/Name of card must be at least 5 characters long!/</span>}
                        </div>
                        <div className="u-form-group u-label-top">
                            <label htmlFor="email-3b9a" className="u-label">Number of cards:</label>
                            <input
                                type="number"
                                onChange={onChange}
                                onBlur={validateCount}
                                value={values.count}
                                placeholder="Enter number of cards"
                                id="email-3b9a"
                                name="count"
                                className=
                                {
                                    errors.count
                                        ?
                                        `${styles['error']} u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-white u-input-2`
                                        :
                                        "u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-white u-input-2"
                                }
                                required="required"
                            />
                            {errors.count && <span>/Number of cards must be at least 1 and must be an integer/</span>}
                        </div>
                        <div className="u-form-group u-label-top u-form-group-3">
                            <label htmlFor="text-f937" className="u-label">Price (leva):</label>
                            <input
                                type="number"
                                onChange={onChange}
                                onBlur={validateNumbers}
                                value={values.price}
                                placeholder="Enter price of one card"
                                id="text-f937"
                                name="price"
                                className=
                                {
                                    errors.price
                                        ?
                                        `${styles['error']} u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-white u-input-3`
                                        :
                                        "u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-white u-input-3"
                                }
                                required="required"
                            />
                            {errors.price && <span>/Price of card must be a positive number/</span>}
                        </div>
                        <div className="u-form-group u-label-top u-form-group-4">
                            <label htmlFor="text-d5ae" className="u-label">Card image</label>

                            <DropboxChooser appKey={APP_KEY}
                                success={handleSuccess}
                                cancel={() => console.log('Closed')}
                                multiselect={false}
                            >
                                <p>[Click to choose an image]</p>
                            </DropboxChooser>

                            <input
                                type="text"
                                onChange={onChange}
                                onBlur={validateImageUrl}
                                value={values.image}
                                id="text-d5ae"
                                name="image"
                                className=
                                {
                                    errors.image
                                        ?
                                        `${styles['error']} u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-white u-input-4`
                                        :
                                        "u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-white u-input-4"
                                }
                                required="required"
                                disabled
                            />
                            {errors.image && <span>/The link must start with http/https!/</span>}
                        </div>
                        <div className="u-form-group u-label-top u-form-group-5">
                            <label htmlFor="text-a271" className="u-label">Card description</label>
                            <input
                                type="text"
                                onChange={onChange}
                                onBlur={(e) => validateField(e, 5)}
                                value={values.description}
                                placeholder="Enter card description"
                                id="text-a271"
                                name="description"
                                className=
                                {
                                    errors.description
                                        ?
                                        `${styles['error']} u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-white u-input-5`
                                        :
                                        "u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-white u-input-5"
                                }
                                required="required"
                            />
                            {errors.description && <span>/Card description must be at least 5 characters long!/</span>}
                        </div>
                        <div className="u-form-group u-form-select u-label-top u-form-group-6">
                            <label htmlFor="select-67b6" className="u-label">Category:</label>
                            <div className="u-form-select-wrapper">
                                <select id="select-67b6"
                                    name="category"
                                    className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-white u-input-6"
                                    onChange={onChange}
                                    value={values.category}
                                >
                                    <option value="birthdayCard">Birthday cards</option>
                                    <option value="baptismCard">Baptism cards</option>
                                    <option value="pogachaCard">Round loaf cards</option>
                                    <option value="weddingCard">Wedding cards</option>
                                    <option value="wineLabels">Wine labels</option>
                                </select>
                            </div>
                        </div>
                        {serverError && <span style={{ "margin": " 20px", "color": "red" }}>{serverError}</span>}
                        <div className="u-align-left u-form-group u-form-submit u-label-top">
                            <input
                                disabled={Object.values(errors).some(x => x == true) || Object.values(values).some(x => x === '' || x === 0)}
                                type="submit"
                                value="Create"
                                className="u-btn u-btn-submit u-button-style"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default CreateCard;