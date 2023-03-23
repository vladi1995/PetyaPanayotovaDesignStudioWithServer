import { NavLink } from 'react-router-dom';
import { useContext } from "react";

import { AuthContext } from '../../contexts/AuthContext';

import { CiLogout } from 'react-icons/ci';

const Header = () => {
    const { user } = useContext(AuthContext);

    return (
        <header className="u-clearfix u-header u-palette-1-light-2 u-sticky u-sticky-ee31 u-header" id="sec-b022">
            <nav className="u-align-center u-menu u-menu-dropdown u-offcanvas u-menu-1">
                <div className="menu-collapse" >
                    <NavLink className="u-button-style u-custom-active-border-color u-custom-active-color u-custom-border u-custom-border-color u-custom-borders u-custom-hover-border-color u-custom-hover-color u-custom-left-right-menu-spacing u-custom-padding-bottom u-custom-text-active-color u-custom-text-color u-custom-text-hover-color u-custom-top-bottom-menu-spacing u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
                        to="/">
                    </NavLink>
                </div>
                <div className="u-custom-menu u-nav-container">
                    <ul className="u-nav u-spacing-20 u-unstyled u-nav-1">
                        <li className="u-nav-item"><NavLink
                            className="u-border-active-grey-30 u-border-grey-30 u-border-hover-grey-30 u-border-no-bottom u-border-no-left u-border-no-top u-button-style u-nav-link u-text-active-palette-1-base u-text-grey-90 u-text-hover-palette-1-base"
                            to="/" style={{ padding: '10px 0px' }}>HOME</NavLink>
                        </li>
                        <li className="u-nav-item"><NavLink
                            className="u-border-active-grey-30 u-border-grey-30 u-border-hover-grey-30 u-border-no-bottom u-border-no-left u-border-no-top u-button-style u-nav-link u-text-active-palette-1-base u-text-grey-90 u-text-hover-palette-1-base"
                            to="/cards/catalog" style={{ padding: '10px 0px' }}>CATALOG</NavLink>
                        </li>
                        <li className="u-nav-item"><NavLink
                            className="u-border-active-grey-30 u-border-grey-30 u-border-hover-grey-30 u-border-no-bottom u-border-no-left u-border-no-top u-button-style u-nav-link u-text-active-palette-1-base u-text-grey-90 u-text-hover-palette-1-base"
                            to="/search" style={{ padding: '10px 0px' }}>SEARCH</NavLink>
                        </li>
                        <li className="u-nav-item"><NavLink to="/about"
                            className="u-border-active-grey-30 u-border-grey-30 u-border-hover-grey-30 u-border-no-bottom u-border-no-left u-border-no-top u-button-style u-nav-link u-text-active-palette-1-base u-text-grey-90 u-text-hover-palette-1-base"
                            style={{ padding: '10px 0px' }}>ABOUT</NavLink>
                        </li>
                        {user.email &&
                            <>
                                <li className="u-nav-item"><NavLink
                                    className="u-border-active-grey-30 u-border-grey-30 u-border-hover-grey-30 u-border-no-bottom u-border-no-left u-border-no-top u-button-style u-nav-link u-text-active-palette-1-base u-text-grey-90 u-text-hover-palette-1-base"
                                    to={`/user/profile/${user._id}`} style={{ padding: '10px 0px' }}>MY PROFILE</NavLink>
                                </li>
                                <li className="u-nav-item"><NavLink to="/cards/create"
                                    className="u-border-active-grey-30 u-border-grey-30 u-border-hover-grey-30 u-border-no-bottom u-border-no-left u-border-no-top u-button-style u-nav-link u-text-active-palette-1-base u-text-grey-90 u-text-hover-palette-1-base"
                                    style={{ padding: '10px 0px' }}>CREATE</NavLink>
                                </li>
                            </>
                        }
                    </ul>
                </div>
            </nav>

            <NavLink to="/" className="u-image u-logo u-image-1" data-image-width="544"
                data-image-height="161">
                <img src="/images/2.png" className="u-logo-image u-logo-image-1" />
            </NavLink>
            <nav className="u-menu u-menu-dropdown u-offcanvas u-menu-2">
                <div className="u-custom-menu u-nav-container">
                    <ul className="u-nav u-spacing-0 u-unstyled u-nav-3">
                        {user.email ?
                            <>
                                <li className="u-nav-item">
                                    <NavLink
                                        className="u-border-2 u-border-active-grey-30 u-border-grey-30 u-border-hover-grey-30 u-border-no-bottom u-border-no-left u-border-no-top u-button-style u-nav-link u-text-active-palette-1-base u-text-grey-90 u-text-hover-palette-1-base"
                                        to={`/user/profile/${user._id}`} style={{ padding: '0px 20px' }}>{user.firstName}</NavLink>
                                </li>
                                <li className="u-nav-item">
                                    <NavLink
                                        className="u-border-active-grey-30 u-border-grey-30 u-border-hover-grey-30 u-border-no-bottom u-border-no-left u-border-no-top u-button-style u-nav-link u-text-active-palette-1-base u-text-grey-90 u-text-hover-palette-1-base"
                                        to="/auth/logout" style={{ padding: '0px 20px' }}> Logout <CiLogout /></NavLink>
                                </li>
                            </>
                            :
                            <>
                                <li className="u-nav-item">
                                    <NavLink
                                        className="u-border-2 u-border-active-grey-30 u-border-grey-30 u-border-hover-grey-30 u-border-no-bottom u-border-no-left u-border-no-top u-button-style u-nav-link u-text-active-palette-1-base u-text-grey-90 u-text-hover-palette-1-base"
                                        to="/auth/login" style={{ padding: '0px 20px' }}>Login</NavLink>
                                </li>
                                <li className="u-nav-item">
                                    <NavLink
                                        className="u-border-active-grey-30 u-border-grey-30 u-border-hover-grey-30 u-border-no-bottom u-border-no-left u-border-no-top u-button-style u-nav-link u-text-active-palette-1-base u-text-grey-90 u-text-hover-palette-1-base"
                                        to="/auth/register" style={{ padding: '0px 20px' }}>Register</NavLink>
                                </li>
                            </>
                        }
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;