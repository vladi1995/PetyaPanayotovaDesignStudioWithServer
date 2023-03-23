import { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import useValidatorEdit from '../../../hooks/useEditValidator';

import { CardContext } from '../../../contexts/CardContext';
import * as cardService from '../../../services/cardService';

import './Edit.css';
import styles from '../Card.module.css';

import DropboxChooser from 'react-dropbox-chooser';
const APP_KEY = 'thwqp35vo5cl07d';

const CardEdit = () => {
    const navigate = useNavigate();
    const { cardId } = useParams();
    const { editCard } = useContext(CardContext);

    const { values, errors, onChange, validateImageUrl, validateField, validateNumbers, validateCount } = useValidatorEdit(cardId);

    const editCardHandler = (e) => {
        e.preventDefault();
        cardService.edit(cardId, values)
            .then(result => {
                editCard(cardId, result);
                navigate(`/cards/details/${cardId}`);
            });
    };


    function handleSuccess(files) {
        values.image = files[0].link;
    }
    return (
        <section className="u-align-center u-clearfix u-grey-5 u-section-11" id="sec-fd74">
            <div className="u-clearfix u-sheet u-sheet-1">
                <h2 className="u-text u-text-default u-text-1">Edit card</h2>
                <div className="u-form u-form-1">
                    <form
                        className="u-clearfix u-form-spacing-15 u-form-vertical u-inner-form"
                        style={{ "padding": "10px" }}
                        source="email"
                        name="form"
                        onSubmit={editCardHandler}
                    >
                        <div className="u-form-group u-form-name u-label-top">
                            <label htmlFor="name-3b9a" className="u-label">Name:</label>
                            <input
                                type="text"
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
                                value={values.name}
                                onChange={onChange}
                                onBlur={(e) => validateField(e, 5)}
                            />
                            {errors.name && <span>/Name of card must be at least 5 characters long!/</span>}
                        </div>
                        <div className="u-form-group u-label-top">
                            <label htmlFor="email-3b9a" className="u-label">Count:</label>
                            <input
                                type="number"
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
                                value={Number(values.count)}
                                onChange={onChange}
                                onBlur={validateCount}
                            />
                            {errors.count && <span>/Number of cards must be at least 1 and must be an integer/</span>}
                        </div>
                        <div className="u-form-group u-label-top u-form-group-3">
                            <label htmlFor="text-f937" className="u-label">Price (leva):</label>
                            <input
                                type="number"
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
                                value={values.price}
                                onChange={onChange}
                                onBlur={validateNumbers}
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
                                placeholder="Въведете адрес на изображението"
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
                                value={values.image}
                                onChange={onChange}
                                onBlur={validateImageUrl}
                                disabled
                            />
                            {errors.image && <span>/The link must start with http/https!/</span>}
                        </div>
                        <div className="u-form-group u-label-top u-form-group-5">
                            <label htmlFor="text-a271" className="u-label">Card description</label>
                            <input
                                type="text"
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
                                value={values.description}
                                onChange={onChange}
                                onBlur={(e) => validateField(e, 5)}
                            />
                            {errors.description && <span>/Card description must be at least 5 characters long!/</span>}
                        </div>
                        <div className="u-form-group u-form-select u-label-top u-form-group-6">
                            <label htmlFor="select-67b6" className="u-label">Category:</label>
                            <div className="u-form-select-wrapper">
                                <select
                                    id="select-67b6"
                                    name="select"
                                    className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-white u-input-6"
                                    value={values.category}
                                    onChange={onChange}
                                >
                                    <option value="birthdayCard">Birthday cards</option>
                                    <option value="baptismCard">Baptism cards</option>
                                    <option value="pogachaCard">Round loaf cards</option>
                                    <option value="weddingCard">Wedding cards</option>
                                    <option value="wineLabels">Wine labels</option>
                                </select>
                            </div>
                        </div>
                        <div className="u-align-left u-form-group u-form-submit u-label-top">
                            <input disabled={Object.values(errors).some(x => x == true) || Object.values(values).some(x => x === '' || x === 0)}
                                type="submit"
                                value="Edit"
                                className="u-btn u-btn-submit u-button-style"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default CardEdit;