import { useState, useEffect, useContext } from 'react';
import { NavLink, useParams, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../../contexts/AuthContext';
import { CardContext } from '../../../contexts/CardContext';
import * as cardService from '../../../services/cardService';

import { imageFormatter } from '../../../utils/formatFunctions';

import { objOfCategories } from '../../../utils/constants';

import './Delete.css';

const CardDelete = () => {
    const { cardId } = useParams();
    const [card, setCard] = useState({});
    const [serverError, setServerError] = useState('');

    const { removeCard } = useContext(CardContext);
    const navigate = useNavigate();

    const [loading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        cardService.getOne(cardId)
            .then(result => {
                setCard(result.card);
                setIsLoading(false);
            }).catch((err) => {
                setServerError(err.message);
            });
    }, [cardId]);

    const deleteCardHandler = () => {
        const confirmation = window.confirm('Are you sure you want to delete the card?');

        if (confirmation) {
            cardService.remove(cardId)
                .then(() => {
                    removeCard(cardId);
                    navigate('/cards/catalog');
                });
        }
    };

    return (
        <>
            {!loading &&
                <section className="u-clearfix u-grey-5 u-section-12" id="sec-7411">
                    <div className="u-clearfix u-sheet u-sheet-1">
                        <div className="u-clearfix u-expanded-width u-gutter-0 u-layout-spacing-vertical u-layout-wrap u-layout-wrap-1">
                            <div className="u-layout">
                                <div className="u-layout-row">
                                    <div className="u-align-left u-container-style u-layout-cell u-left-cell u-size-40 u-layout-cell-1">
                                        <div className="u-container-layout u-valign-top u-container-layout-1">
                                            <h2 className="u-text u-text-default u-text-font u-text-1">Delete card</h2>
                                            <h2 className="u-text u-text-default u-text-2">{card.name}</h2>
                                            <p className="u-text u-text-3">{card.description}</p>
                                            <NavLink to={`/user/profile/${card.ownerId._id}`}
                                                className="u-active-none u-border-2 u-border-no-left u-border-no-right u-border-no-top u-border-palette-1-base u-bottom-left-radius-0 u-bottom-right-radius-0 u-btn u-btn-rectangle u-button-style u-hover-none u-none u-radius-0 u-top-left-radius-0 u-top-right-radius-0 u-btn-1">
                                                {card.ownerId.email || card.ownerId.firstName + ' ' + card.ownerId.lastName}</NavLink>
                                            <p className="u-text u-text-default u-text-4">Creator:</p>
                                            {card.ownerId.profileImageUrl
                                                ?
                                                <img src={imageFormatter(card.ownerId.profileImageUrl)} style={{ maxWidth: '100px', marginLeft: '15px', marginTop: '10px' }} alt="userPhoto" />
                                                :
                                                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" style={{ maxWidth: '100px', marginLeft: '60px', marginTop: '10px' }} alt="userPhoto" />
                                            }
                                            
                                            <br /> <br />
                                            <p className="u-text u-text-default u-text-5">Category:  {objOfCategories[card.category]}</p>
                                            <p className="u-text u-text-default u-text-6">&nbsp;{card.price} lv.</p>
                                            <p className="u-text u-text-default u-text-7">Price of one (lv):</p>
                                            <p className="u-text u-text-default u-text-8">{card.count} count</p>
                                            <p className="u-text u-text-default u-text-9">Left are:</p>
                                            <div className="u-form u-form-1">

                                                <div className="u-form-group u-form-submit u-label-top">
                                                    <NavLink style={{ 'marginTop': '20px', 'marginLeft': '15px' }} to={`/cards/delete/${cardId}`} onClick={deleteCardHandler} className="u-border-none u-btn u-btn-submit u-button-style u-palette-2-base u-btn-3">
                                                        Delete
                                                    </NavLink>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="u-container-style u-image u-layout-cell u-right-cell u-size-20 u-image-1">
                                        <img src={imageFormatter(card.image)} style={{ width: "400px", height: "600px", objectFit: "cover" }}></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {serverError && <span style={{ "margin": " 20px", "color": "red" }}>{serverError}</span>}
                </section>
            }
        </>
    );
};

export default CardDelete;