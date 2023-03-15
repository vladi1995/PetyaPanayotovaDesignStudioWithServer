import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import { CardContext } from "../../contexts/CardContext";

import './Home.css';
import HomeCard from "./HomeCard";

const Home = () => {
    const { user } = useContext(AuthContext);
    const { cards } = useContext(CardContext);

    return (
        <section className="u-clearfix u-grey-5 u-section-1" id="sec-92f0">
            <div className="u-clearfix u-sheet u-sheet-1">
                <div className="u-clearfix u-expanded-width u-gutter-12 u-layout-wrap u-layout-wrap-1">
                    <div className="u-layout">
                        <div className="u-layout-row">
                            <div className="u-container-style u-layout-cell u-left-cell u-size-30 u-size-xs-60 u-layout-cell-1" src="">
                                <div className="u-container-layout u-container-layout-1">
                                    <h2 className="u-align-center u-custom-font u-text u-text-default u-text-font u-text-2">Направете всеки
                                        повод запомнящ се ...</h2>
                                    <p className="u-align-center u-text u-text-3">Поздравителни картички за рожден ден, сватба, кръщене, св.
                                        Валентин ... етикети за вино и много други</p>
                                    <NavLink to="/cards/catalog" className="u-btn u-btn-round u-button-style u-radius-50 u-btn-1">КАТАЛОГ</NavLink>
                                    {user.email
                                        ?
                                        <NavLink to="/search" className="u-btn u-btn-round u-button-style u-radius-50 u-btn-2">ТЪРСЕНЕ</NavLink>
                                        :
                                        <NavLink to="/auth/register" className="u-btn u-btn-round u-button-style u-radius-50 u-btn-2">РЕГИСТРАЦИЯ</NavLink>
                                    }

                                </div>
                            </div>
                            <div
                                className="u-align-center u-container-style u-image u-layout-cell u-right-cell u-size-30 u-size-xs-60 u-image-1"
                                src="" data-image-width="1920" data-image-height="1080">
                                <div className="u-container-layout u-container-layout-2" src=""></div>
                            </div>
                        </div>
                        <h4 className="u-align-center u-text u-text-3">Последно добавени картички</h4><hr />
                        {cards.length ?
                            <>
                                <section className="u-clearfix u-section-14" id="sec-c19f">
                                    <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
                                        <div className="u-expanded-width u-list u-list-1">
                                            <div className="u-repeater u-repeater-1">
                                                {cards.slice(-3).reverse().map(x => <HomeCard key={x._id} item={x} />)}
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </>
                            :
                            <div className="u-repeater u-repeater-1">
                            <h2>Няма данни</h2>
                            <p>Няма добавени картички! Моля опитайте по-късно или добавете картичка сами.</p>
                            <img src="https://shopcaymanislands.com/public/front/images/empty-cart.png" alt="notFoundPicture" />
                        </div>
                        }
                    </div>
                </div>
            </div>
            <br />
        </section>

    );
};

export default Home;