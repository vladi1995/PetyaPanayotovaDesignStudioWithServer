import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { AuthContext } from '../../../contexts/AuthContext';
import { CardContext } from '../../../contexts/CardContext';
import * as userService from '../../../services/userService';

import UserCard from './UserCard';

import { imageFormatter } from '../../../utils/formatFunctions';

import { FaCoins } from 'react-icons/fa';

import './UserInfo.css';

const UserProfile = () => {
    const { user } = useContext(AuthContext);
    const { cards } = useContext(CardContext);
    const { userId } = useParams();

    const [currentUser, setCurrentUser] = useState({});

    useEffect(() => {
        if (userId === user._id) {
            userService.getOne(user._id)
                .then(result => {
                    setCurrentUser(result);
                });
        } else {
            userService.getOne(userId)
                .then(result => {
                    setCurrentUser(result);
                });
        }
    }, []);

    const filteredCards = cards.filter(x => x.ownerId._id ? x.ownerId._id === currentUser._id : x.ownerId === currentUser._id);

    return (
        <section className="u-align-center u-clearfix u-grey-5 u-section-13" id="sec-8e51">
            <div className="u-clearfix u-sheet u-sheet-1">
                <h2 className="u-text u-text-default u-text-1">{currentUser?.firstName + ' ' + currentUser?.lastName}</h2>
                <h3
                    className="u-border-2 u-border-no-bottom u-border-no-left u-border-no-top u-button-style u-nav-link u-text-active-palette-1-base u-text-grey-90 u-text-hover-palette-1-base"
                    to={`/user/profile/${user._id}`} style={{ padding: '20px 20px' }}>Budget: <b>{currentUser?.budget}</b> lv. <FaCoins /></h3>
                <img src={imageFormatter(currentUser?.profileImageUrl)} style={{ 'maxWidth': '150px', 'borderRadius': '10px' }} />

                <p className="u-text u-text-2">Uploaded cards:</p>
                <p className="u-text u-text-3"><b>{filteredCards?.length}</b> count</p>
                <p className="u-text u-text-4">Liked cards:</p>
                <p className="u-text u-text-5"><b>{currentUser?.likes?.length}</b> count</p>
                <p className="u-text u-text-4">Bought cards:</p>
                <p className="u-text u-text-5"><b>{currentUser?.boughtProducts?.length}</b> count</p>
                <div className="u-rotation-parent u-rotation-parent-1">
                    <div className="u-image u-image-circle u-rotate-90 u-image-1" alt="" data-image-width="3296"
                        data-image-height="2472"></div>
                </div>
                <h3 className="u-text u-text-default u-text-6">Uploaded cards:</h3>
                <div className="u-expanded-width u-gallery u-layout-grid u-lightbox u-show-text-on-hover u-gallery-1">
                    <div className="u-gallery-inner u-gallery-inner-1">
                        {filteredCards.map(x => <UserCard key={x._id} userCard={x} />)}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserProfile;