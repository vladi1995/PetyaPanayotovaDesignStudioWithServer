import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { CardContext } from '../../../contexts/CardContext';
import { AuthContext } from '../../../contexts/AuthContext';

import Pagination from '../../features/Pagination/Pagination';
import HomeCard from '../../home/HomeCard';

import './Catalog.css';

const CatalogCards = () => {
    const { cards, switchCards, noCardsAvailable } = useContext(CardContext);
    const { user } = useContext(AuthContext);

    const [currentPage, setCurrentPage] = useState(1);

    const postsPerPage = 6;
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;

    const currentPosts = cards.slice(firstPostIndex, lastPostIndex);

    const sortHandler = (typeOfCard) => {
        switchCards(typeOfCard);
        setCurrentPage(1);
    };

    return (
        <>
            <section className="u-clearfix u-section-14 u-grey-5" id="sec-c19f">
                <h4 className="u-align-center u-text u-text-3">Catalog</h4>
                <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">

                    <ul className="u-nav u-spacing-0 u-unstyled u-nav-3" style={{ margin: "20px auto" }}>
                        <>
                            <li className="u-nav-item">
                                <NavLink
                                    className="u-border-2 active-grey-30 u-border-grey-30 u-border-hover-grey-30 u-border-no-bottom u-border-no-left u-border-no-top u-button-style u-nav-link u-text-active-palette-1-base u-text-grey-90 u-text-hover-palette-1-base"
                                    style={{ padding: '0px 20px' }}
                                    onClick={() => sortHandler('all')}
                                >
                                    All
                                </NavLink>
                            </li>
                            <li className="u-nav-item">
                                <NavLink
                                    className="u-border-2 active-grey-30 u-border-grey-30 u-border-hover-grey-30 u-border-no-bottom u-border-no-left u-border-no-top u-button-style u-nav-link u-text-active-palette-1-base u-text-grey-90 u-text-hover-palette-1-base"
                                    style={{ padding: '0px 20px' }}
                                    onClick={() => sortHandler('birthdayCard')}
                                >
                                    Birthday
                                </NavLink>
                            </li>
                            <li className="u-nav-item">
                                <NavLink
                                    className="u-border-2 active-grey-30 u-border-grey-30 u-border-hover-grey-30 u-border-no-bottom u-border-no-left u-border-no-top u-button-style u-nav-link u-text-active-palette-1-base u-text-grey-90 u-text-hover-palette-1-base"
                                    style={{ padding: '0px 20px' }}
                                    onClick={() => sortHandler('baptismCard')}
                                >
                                    Baptism
                                </NavLink>
                            </li>
                            <li className="u-nav-item">
                                <NavLink
                                    className="u-border-2 active-grey-30 u-border-grey-30 u-border-hover-grey-30 u-border-no-bottom u-border-no-left u-border-no-top u-button-style u-nav-link u-text-active-palette-1-base u-text-grey-90 u-text-hover-palette-1-base"
                                    style={{ padding: '0px 20px' }}
                                    onClick={() => sortHandler('pogachaCard')}
                                >
                                    Loaf bread
                                </NavLink>
                            </li>
                            <li className="u-nav-item">
                                <NavLink
                                    className="u-border-2 active-grey-30 u-border-grey-30 u-border-hover-grey-30 u-border-no-bottom u-border-no-left u-border-no-top u-button-style u-nav-link u-text-active-palette-1-base u-text-grey-90 u-text-hover-palette-1-base"
                                    style={{ padding: '0px 20px' }}
                                    onClick={() => sortHandler('weddingCard')}
                                >
                                    Wedding
                                </NavLink>
                            </li>
                            <li className="u-nav-item">
                                <NavLink
                                    className="u-border-active-grey-30 u-border-grey-30 u-border-hover-grey-30 u-border-no-bottom u-border-no-left u-border-no-top u-button-style u-nav-link u-text-active-palette-1-base u-text-grey-90 u-text-hover-palette-1-base"
                                    style={{ padding: '0px 20px' }}
                                    onClick={() => sortHandler('wineLabels')}
                                >
                                    Wine labels
                                </NavLink>
                            </li>
                        </>
                    </ul>
                    {!noCardsAvailable ?
                    <>
                        <div className="u-expanded-width u-list u-list-1">
                            <div className="u-repeater u-repeater-1">
                                {currentPosts.map(x => <HomeCard key={x._id} item={x} />)}
                            </div>
                        </div>
                        <Pagination totalPosts={cards.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
                        </>
                        :
                        <section className="u-clearfix u-grey-5 u-section-6" id="sec-f49c">
                            <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
                                <div className="u-blog u-expanded-width u-blog-1">
                                    <div className="u-repeater u-repeater-1">
                                        <h2>No data</h2>
                                        <p>There are no added cards! Please try again later or add a new card yourself...
                                            {user.email
                                                ?
                                                <NavLink to="/cards/create" className="u-btn u-btn-round u-button-style u-radius-50 u-btn-2" style={{padding: "10px"}}>Create card</NavLink>
                                                :
                                                <NavLink to="/auth/register" className="u-btn u-btn-round u-button-style u-radius-50 u-btn-2" style={{padding: "10px"}}>Register</NavLink>
                                            }
                                        </p>
                                        <img src="https://shopcaymanislands.com/public/front/images/empty-cart.png" alt="notFoundPicture" />
                                    </div>
                                </div>
                            </div>
                        </section>
                    }
                </div>
            </section>
        </>
    );


};

export default CatalogCards;