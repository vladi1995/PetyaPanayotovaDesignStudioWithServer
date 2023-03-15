import { NavLink } from "react-router-dom";
import { objOfCategories } from "../../utils/constants";

const HomeCard = ({item}) => {
    return (
        <div className="u-container-style u-list-item u-repeater-item">
            <div className="u-container-layout u-similar-container u-container-layout-3">
                <img alt="" className="u-expanded-width u-image u-image-default u-image-3" data-image-width="2000" data-image-height="1333" 
                src={item.image} />
                <h3 className="u-text u-text-default u-text-5">{item.name}</h3>
                <p className="u-text u-text-6">Категория: {objOfCategories[item.category]}</p>
                <NavLink to={`/cards/details/${item._id}`} className="u-active-none u-border-2 u-border-active-palette-2-dark-1 u-border-hover-palette-2-base u-border-no-left u-border-no-right u-border-no-top u-border-palette-1-base u-btn u-button-style u-hover-none u-none u-text-hover-palette-2-base u-text-palette-1-base u-btn-3">Детайли</NavLink>
            </div>
        </div>
    );
}

export default HomeCard;