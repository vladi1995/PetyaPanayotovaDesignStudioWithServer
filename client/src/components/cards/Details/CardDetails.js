import { useEffect, useState, useContext } from "react";
import { useParams, NavLink } from "react-router-dom";

import { AuthContext } from "../../../contexts/AuthContext";
import * as cardService from '../../../services/cardService';
import * as featuresService from '../../../services/featuresService';
import * as userService from '../../../services/userService';

import Comments from "../../features/Comments/Comments";

import { objOfCategories } from '../../../utils/constants';
import './Details.css';

const CardDetails = () => {
    const { cardId } = useParams();
    const [card, setCard] = useState({});

    const { user } = useContext(AuthContext);
    const [loading, setIsLoading] = useState(true);

    const [productsToBuy, setProductsToBuy] = useState(0);

    const [errorPositiveNumber, setErrorPositiveNumber] = useState(false);
    const [errorBudget, setErrorBudget] = useState(false);
    const [errorCount, setErrorCount] = useState(false);

    // const [allBoughtProducts, setAllBoughtProducts] = useState([]);
    // const [valueCount, setValueCount] = useState(0);
    // const [isUserBought, setIsUserBought] = useState(false);
    // const { userInfo, userEdit } = useContext(AuthContext);


    useEffect(() => {
        // featuresService.getAll()
        //     .then(result => {
        //         setAllBoughtProducts(result);
        //         const sumOfAllBought = Number(result.filter(x => x.cardId == cardId).map(x => Number(x.productsToBuy)).reduce((prev, next) => prev + next, 0));
        //         const isBought = result.filter(x => x.cardId == cardId).some(x => x._ownerId == user._id);
        //         setIsUserBought(isBought);
        //         setValueCount(sumOfAllBought);
        //     });

    }, []);

    useEffect(() => {
        setIsLoading(true);
        cardService.getOne(cardId)
            .then(result => {
                setCard(result);
                setIsLoading(false);
            });
    }, []);

    // const buyHandler = (e) => {
    //     e.preventDefault();

    //     setErrorPositiveNumber(false);
    //     setErrorBudget(false);
    //     setErrorCount(false);

    //     if (productsToBuy <= 0) {
    //         setErrorPositiveNumber(true);
    //         return;
    //     }

    //     if (productsToBuy * card[0].price > Number(user.budget)) {
    //         setErrorBudget(true);
    //         return;
    //     }

    //     if (productsToBuy > Number(card[0].count - valueCount)) {
    //         setErrorCount(true);
    //         return;
    //     }

    //     featuresService.create({ cardId, productsToBuy })
    //         .then(result => {
    //             setValueCount(state => {
    //                 return Number(state) + Number(result.productsToBuy);
    //             });
    //             setIsUserBought(true);

    //             userService.edit(userInfo[0]._id, { budget: Number(userInfo[0].budget) - Number(card[0].price) * Number(productsToBuy) })
    //                 .then(result => userEdit(result));
    //         });
    //  };

    // const onChangeBuyProducts = (e) => {
    //     setProductsToBuy(e.target.value);
    // };

    // const likeHandler = (e) => {
    //     featuresService.createLike({ email: user.email, cardId })
    //         .then(res => getAllLikes());
    // };


    return (
        <>
            {
                !loading
                &&
                <>
                    <section className="u-clearfix u-grey-5 u-section-7" id="sec-8833">
                        <div className="u-clearfix u-sheet u-sheet-1">
                            <div className="u-clearfix u-expanded-width u-gutter-0 u-layout-spacing-vertical u-layout-wrap u-layout-wrap-1">
                                <div className="u-layout">
                                    <div className="u-layout-row">
                                        <div className="u-align-left u-container-style u-layout-cell u-left-cell u-size-40 u-layout-cell-1">
                                            <div className="u-container-layout u-container-layout-1">

                                                <h2 className="u-text u-text-default u-text-1">{card.name}</h2>
                                                <p className="u-text u-text-2">{card.description}</p>
                                                <NavLink to={`/user/profile/${card.ownerId._id}`}
                                                    className="u-active-none u-border-2 u-border-no-left u-border-no-right u-border-no-top u-border-palette-1-base u-bottom-left-radius-0 u-bottom-right-radius-0 u-btn u-btn-rectangle u-button-style u-hover-none u-none u-radius-0 u-top-left-radius-0 u-top-right-radius-0 u-btn-1">
                                                    {card.ownerId.email || card.ownerId.firstName + ' ' + card.ownerId.lastName}</NavLink>
                                                <p className="u-text u-text-default u-text-3">Създал:</p>

                                                {card.ownerId.profileImageUrl
                                                    ?
                                                    <img src={card.ownerId.profileImageUrl} style={{ maxWidth: '100px', marginLeft: '60px', marginTop: '10px', borderRadius: '10px' }} alt="userPhoto" />
                                                    :
                                                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" style={{ maxWidth: '100px', marginLeft: '60px', marginTop: '10px' }} alt="userPhoto" />
                                                }


                                                <a href="https://nicepage.com/k/parking-html-templates"
                                                    className="u-active-none u-border-2 u-border-no-left u-border-no-right u-border-no-top u-border-palette-1-base u-bottom-left-radius-0 u-bottom-right-radius-0 u-btn u-btn-rectangle u-button-style u-hover-none u-none u-radius-0 u-top-left-radius-0 u-top-right-radius-0 u-btn-2">
                                                    {objOfCategories[card.category]}</a>

                                                <p className="u-text u-text-default u-text-4">Категория:</p>
                                                <p className="u-text u-text-default u-text-5">Цена за брой:</p>
                                                <p className="u-text u-text-default u-text-6">{card.price} лв.</p>
                                                {/* <p className="u-text u-text-default u-text-7">{valueCount ? card[0].count - valueCount : card[0].count} броя</p> */}

                                                <p className="u-text u-text-default u-text-8">Остават:</p>

                                                {user._id === card.ownerId._id ?
                                                    <>
                                                        <span className="u-file-icon u-icon u-icon-1">
                                                            <NavLink to={`/cards/edit/${card._id}`}>
                                                                <img src="/images/2919592.png" alt="" />
                                                            </NavLink>
                                                        </span>


                                                        <span className="u-file-icon u-icon u-icon-2">
                                                            <NavLink to={`/cards/delete/${card._id}`}>
                                                                <img src="/images/6861362.png" alt="" />
                                                            </NavLink>
                                                        </span>

                                                    </> :
                                                    <>
                                                        {/* {!isUserBought ?
                                                            <div className="u-form u-form-1">
                                                                <form
                                                                    className="u-clearfix u-form-horizontal u-form-spacing-15 u-inner-form"
                                                                    style={{ "padding": "15px" }}
                                                                    source="email"
                                                                    // onSubmit={buyHandler}
                                                                >

                                                                    <div className="u-form-group u-label-top">
                                                                        <label htmlFor="name-558c" className="u-label">Купи</label>
                                                                        <input type="text"
                                                                            placeholder="Брой"
                                                                            id="name-558c"
                                                                            name="numOfCards"
                                                                            className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10"
                                                                            required="required"
                                                                            // value={productsToBuy}
                                                                            // onChange={onChangeBuyProducts}
                                                                        />
                                                                    </div>

                                                                    <div className="u-form-group u-form-submit u-label-top">
                                                                        <input type="submit" value="Купи" className="u-btn u-btn-submit u-button-style" />
                                                                    </div>


                                                                </form>
                                                            </div>
                                                            :
                                                            <div style={{ marginLeft: '60px' }}>/Вече сте закупили от картичката!/</div>
                                                        }
                                                        {errorPositiveNumber && <div style={{ marginLeft: '65px' }}>/Закупените продукти трябва да са положително число!/</div>}
                                                        {errorBudget && <div style={{ marginLeft: '65px' }}>/Бюджетът ви не е достатъчен!/</div>}
                                                        {errorCount && <div style={{ marginLeft: '65px' }}>/Недостатъчна наличност!/</div>} */}

                                                        {/* {!likes.some(x => x._ownerId == user._id) &&
                                                            <button
                                                                className="u-border-2 u-border-grey-75 u-btn u-btn-round u-button-style u-gradient u-none u-radius-4 u-text-body-alt-color u-btn-4"
                                                                onClick={likeHandler}
                                                            >
                                                                &nbsp;Харесва ми
                                                            </button>
                                                        } */}
                                                        <br /><br />
                                                        {/* <p className="u-text u-text-default u-text-9">{likes.length} </p> */}
                                                        <p className="u-text u-text-10">харесват картичката</p>
                                                    </>
                                                }
                                            </div>
                                        </div>

                                        <div className="u-container-style u-image u-layout-cell u-right-cell u-size-20 u-image-1">
                                            <img src={card.image} style={{ width: "400px", height: "600px", objectFit: "cover" }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <Comments card={card} /> */}
                </>
            }
        </>
    );
};

export default CardDetails;