import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { AuthContext } from "../../../contexts/AuthContext";
import * as cardService from '../../../services/cardService';
import * as userService from '../../../services/userService';
import * as featureService from '../../../services/featuresService';

import UserCard from "./UserCard";
import { FaCoins } from 'react-icons/fa';

import './UserInfo.css';

const UserProfile = () => {
    const { user } = useContext(AuthContext);
    const [cardsCurrentUser, setCardsCurrentUser] = useState([]);
    const [currentUser, setCurrentUser] = useState({});
    const [likes, setLikes] = useState(0);

    useEffect(() => {
        cardService.getAllDetailed(user._id)
            .then(result => {
                console.log(result);
                setCardsCurrentUser(result);
            });

        // userService.getCurrentUser(user._id)
        //     .then(result => {
        //         setCurrentUser(result);
        //     });

        // featureService.getLikesPerCard(user._id)
        //     .then(result => {
        //         setLikes(result.length);
        //     });
    }, []);

    console.log(cardsCurrentUser);

    return (
        <section className="u-align-center u-clearfix u-grey-5 u-section-13" id="sec-8e51">
            <div className="u-clearfix u-sheet u-sheet-1">
                <h2 className="u-text u-text-default u-text-1">{currentUser?.firstName + ' ' + currentUser[0]?.lastName}</h2>
                <h3
                    className="u-border-2 u-border-no-bottom u-border-no-left u-border-no-top u-button-style u-nav-link u-text-active-palette-1-base u-text-grey-90 u-text-hover-palette-1-base"
                    to={`/user/profile/${user._id}`} style={{ padding: '20px 20px' }}>Бюджет: <b>{currentUser[0]?.budget}</b> лв. <FaCoins /></h3>
                <img src={currentUser[0]?.profileImageUrl} style={{ 'maxWidth': '150px', 'borderRadius': '10px' }} />
                <p className="u-text u-text-2">Брой качени картички:</p>
                <p className="u-text u-text-3"><b>{cardsCurrentUser.length}</b> броя</p>
                <p className="u-text u-text-4">Брой харесани картички:</p>
                <p className="u-text u-text-5"><b>{likes}</b> броя</p>
                <div className="u-rotation-parent u-rotation-parent-1">
                    <div className="u-image u-image-circle u-rotate-90 u-image-1" alt="" data-image-width="3296"
                        data-image-height="2472"></div>
                </div>
                <h3 className="u-text u-text-default u-text-6">Качени картички:</h3>
                <div className="u-expanded-width u-gallery u-layout-grid u-lightbox u-show-text-on-hover u-gallery-1">
                    <div className="u-gallery-inner u-gallery-inner-1">
                        {cardsCurrentUser.map(x => <UserCard key={x._id} userCard={x} />)}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default UserProfile;