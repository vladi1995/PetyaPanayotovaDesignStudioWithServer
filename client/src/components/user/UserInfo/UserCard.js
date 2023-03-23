import { NavLink } from 'react-router-dom';

import { imageFormatter } from '../../../utils/formatFunctions';

const UserCard = ({ userCard }) => {
    return (
        <div className="u-effect-fade u-gallery-item">
            <NavLink to={`/cards/details/${userCard._id}`}>
                <div className="u-back-slide">
                    <img src={imageFormatter(userCard.image)} className="u-back-image u-expanded" />
                </div>
                <div className="u-over-slide u-shading u-over-slide-1">
                    <h3 className="u-gallery-heading">{userCard.name}</h3>
                    <p className="u-gallery-text">{userCard.name}</p>
                </div>
            </NavLink>
        </div>
    );
};

export default UserCard;