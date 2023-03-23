import { useContext, useState } from 'react';

import { CardContext } from "../../../contexts/CardContext";

import UserCard from '../../user/UserInfo/UserCard';

import './Search.css';

const Search = () => {
    const { cards } = useContext(CardContext);

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

        setResult(cards.filter(x => (x.category === search.criteria || search.criteria === 'all') && x.name.toLowerCase().includes(search.text.toLowerCase())));
    };

    return (
        <section className="u-clearfix u-grey-5 u-section-6" id="sec-f49c">
            <section className="u-align-center u-clearfix u-grey-5 u-section-10" id="sec-7464">
                <div className="u-clearfix u-sheet u-sheet-1">
                    <h2 className="u-text u-text-default u-text-1">Search of a card</h2>
                    <div className="u-form u-form-1">
                        <form
                            className="u-clearfix u-form-spacing-15 u-form-vertical u-inner-form"
                            style={{ padding: "10px" }}
                            name="form"
                            onSubmit={onSearchHandler}
                        >
                            <div className="u-form-group u-form-name u-label-top">
                                <label htmlFor="name-3b9a" className="u-label">Name of card:</label>
                                <input
                                    type="text"
                                    placeholder="Enter the name of the card"
                                    id="name-3b9a"
                                    name="text"
                                    onChange={onChange}
                                    value={search.text}
                                    className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-white u-input-1"
                                    required="required"
                                />
                            </div>
                            <div className="u-form-group u-form-select u-label-top u-form-group-6">
                                <label htmlFor="select-67b6" className="u-label">Category:</label>
                                <div className="u-form-select-wrapper">
                                    <select id="select-67b6"
                                        name="criteria"
                                        className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-10 u-white u-input-6"
                                        onChange={onChange}
                                        value={search.criteria}
                                    >
                                        <option value="all">All</option>
                                        <option value="birthdayCard">Birthday cards</option>
                                        <option value="baptismCard">Baptism cards</option>
                                        <option value="pogachaCard">Round loaf cards</option>
                                        <option value="weddingCard">Wedding cards</option>
                                        <option value="wineLabels">Wine labels</option>
                                    </select>
                                </div>
                            </div>
                            <div className="u-align-left u-form-group u-form-submit u-label-top">
                                <input type="submit" value="Search" className="u-btn u-btn-submit u-button-style" />
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
                                        {result.map(x => <UserCard key={x._id} userCard={x} />)}
                                    </div>
                                </div>
                            </div>
                        </>
                        :
                        <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
                            <div className="u-blog u-expanded-width u-blog-1">
                                <div className="u-repeater u-repeater-1">
                                    <h2>No data</h2>
                                    <p>There are no added cards! Please try again ...</p>
                                        <img src="https://shopcaymanislands.com/public/front/images/empty-cart.png" alt="notFoundPicture" />
                                </div>
                            </div>
                        </div>
                    }
                </>
            }
        </section>
    );
};

export default Search;