import { NavLink } from 'react-router-dom';

import './NotFound.css';

const NotFound = () => {
    return (
        <section className="u-clearfix u-grey-5 u-section-4" id="sec-7e29">
            <div className="u-clearfix u-sheet u-sheet-1">
                <div className="u-clearfix u-expanded-width u-gutter-10 u-layout-wrap u-layout-wrap-1">
                    <div className="u-layout">
                        <div className="u-layout-row">
                            <div className="u-container-style u-layout-cell u-left-cell u-size-30 u-size-xs-60 u-layout-cell-1" src="">
                                <div className="u-container-layout u-container-layout-1">
                                    <h2 className="u-align-center u-text u-text-default u-text-1">404 Not Found</h2>
                                    <p className="u-align-left u-text u-text-2">
                                        The page you are looking for is not found. Please go back to home page!
                                    </p>
                                    <NavLink to="/" className="u-btn u-btn-round u-button-style u-radius-50 u-btn-1">HOME</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NotFound;