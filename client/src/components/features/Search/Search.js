import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";

import { CardContext } from "../../../contexts/CardContext";
import { AuthContext } from "../../../contexts/AuthContext";

import CatalogItem from "../../cards/Catalog/CatalogItem";

import './Search.css';
import './Create.css';

const Search = () => {
    const { cards } = useContext(CardContext);
    const { user } = useContext(AuthContext);

    const [search, setSearch] = useState({
        text: '',
        criteria: 'all',
        isSubmitted: false,
    });

    const [result, setResult] = useState([]);

    const onChange = (e) => {
        setSearch(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    const onSearchHandler = (e) => {
        e.preventDefault();

        setSearch(state => ({
            ...state,
            isSubmitted: true,
        }));

        setResult(cards.filter(x => (x.category == search.criteria || search.criteria == 'all') && x.name.toLowerCase().includes(search.text.toLowerCase())));
    }

    return (
        <section className="u-clearfix u-grey-5 u-section-6" id="sec-f49c">
            <section className="u-align-center u-clearfix u-grey-5 u-section-10" id="sec-7464">
                <div className="u-clearfix u-sheet u-sheet-1">
                    <h2 className="u-text u-text-default u-text-1">Търсене на картичка</h2>
                    <div className="u-form u-form-1">
                        <form
                            className="u-clearfix u-form-spacing-15 u-form-vertical u-inner-form"
                            style={{ padding: "10px" }}
                            source="email"
                            name="form"
                            onSubmit={onSearchHandler}
                        >
                            <div className="u-form-group u-form-name u-label-top">
                                <label htmlFor="name-3b9a" className="u-label">Име на картичката:</label>
                                <input
                                    type="text"
                                    placeholder="Въведете име на картичката"
                                    id="name-3b9a"
                                    name="text"
                                    onChange={onChange}
                                    value={search.text}
                                    className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-white u-input-1"
                                    required="required"
                                />
                            </div>
                            <div className="u-form-group u-form-select u-label-top u-form-group-6">
                                <label htmlFor="select-67b6" className="u-label">Категория:</label>
                                <div className="u-form-select-wrapper">
                                    <select id="select-67b6"
                                        name="criteria"
                                        className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-white u-input-6"
                                        onChange={onChange}
                                        value={search.criteria}
                                    >
                                        <option value="all">Всички</option>
                                        <option value="birthdayCard">Картички за рожден ден</option>
                                        <option value="baptismCard">Картички за кръщене</option>
                                        <option value="baptismCard">Картички за погачи</option>
                                        <option value="weddingCard">Покани за сватба</option>
                                        <option value="wineLabels">Етикети за вино</option>
                                    </select>
                                </div>
                            </div>
                            <div className="u-align-left u-form-group u-form-submit u-label-top">
                                <input type="submit" value="Търсене" className="u-btn u-btn-submit u-button-style" />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            {search.isSubmitted &&
                <>
                    {result.length ?
                        <>
                            <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
                                <div className="u-blog u-expanded-width u-blog-1">
                                    <div className="u-repeater u-repeater-1">
                                        {result.map(x => <CatalogItem key={x._id} item={x} />)}
                                    </div>
                                </div>
                            </div>
                        </>
                        :
                        <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
                            <div className="u-blog u-expanded-width u-blog-1">
                                <div className="u-repeater u-repeater-1">
                                    <h2>Няма данни</h2>
                                    <p>Не са открити картички при зададените критерии! Моля, опитайте отново!</p>
                                    <img src="https://shopcaymanislands.com/public/front/images/empty-cart.png" alt="notFoundPicture" />
                                </div>
                            </div>
                        </div>
                    }
                </>
            }
        </section>
    );

}

export default Search;