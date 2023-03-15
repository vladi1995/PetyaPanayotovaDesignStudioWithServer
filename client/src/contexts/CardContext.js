import { useState, useEffect } from "react";
import { createContext } from "react";
import * as cardService from '../services/cardService';

export const CardContext = createContext();

export const CardProvider = ({
    children,
}) => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        cardService.getAll()
            .then(result => {
                setCards(result);
            });
    }, []);

    const addCard = (cardData) => {
        setCards(state => [
            ...state,
            cardData,
        ]);
    };

    const editCard = (cardId, cardData) => {
        return setCards(state => state.map(x => x._id === cardId ? cardData : x));
    };

    const removeCard = (cardId) => {
        return setCards(state => state.filter(x => x._id !== cardId));
    };

    return <CardContext.Provider value={{
        cards, addCard, editCard, removeCard
    }}>
        {children}
    </CardContext.Provider>;
};

