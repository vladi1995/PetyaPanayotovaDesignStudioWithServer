import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";

import { CardContext } from "../../../contexts/CardContext";
import { AuthContext } from "../../../contexts/AuthContext";

import Pagination from "../../features/Pagination/Pagination";
import HomeCard from "../../home/HomeCard";

import './Catalog.css';

const CatalogCards = () => {
    const { cards } = useContext(CardContext);
    const { user } = useContext(AuthContext);

    const [currentPage, setCurrentPage] = useState(1);

    const postsPerPage = 6;
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;

    const currentPosts = cards.slice(firstPostIndex, lastPostIndex);

    if (cards.length) {
        return (
            <>
            <section className="u-clearfix u-section-14 u-grey-5" id="sec-c19f">
            <h4 className="u-align-center u-text u-text-3">Каталог</h4>
                <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
                    <div className="u-expanded-width u-list u-list-1">
                        <div className="u-repeater u-repeater-1">
                            {currentPosts.map(x => <HomeCard key={x._id} item={x} />)}
                        </div>
                    </div>
                </div>
                <Pagination totalPosts={cards.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
            </section>
            </>
        );
    } else {
        return (
            <section className="u-clearfix u-grey-5 u-section-6" id="sec-f49c">
                <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
                    <div className="u-blog u-expanded-width u-blog-1">
                        <div className="u-repeater u-repeater-1">
                            <h2>Няма данни</h2>
                            <p>Няма добавени картички! Моля опитайте по-късно или добавете картичка сами.
                                {user.email
                                    ?
                                    <NavLink to="/cards/create" className="u-btn u-btn-round u-button-style u-radius-50 u-btn-2">Добави картичка</NavLink>
                                    :
                                    <NavLink to="/auth/register" className="u-btn u-btn-round u-button-style u-radius-50 u-btn-2">Регистрирай се</NavLink>
                                }
                            </p>
                            <img src="https://shopcaymanislands.com/public/front/images/empty-cart.png" alt="notFoundPicture" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
};

export default CatalogCards;