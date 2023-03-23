import { useState, useEffect } from "react";
import { createContext } from "react";
import * as cardService from '../services/cardService';

export const CardContext = createContext();
let initialState = [];

export const CardProvider = ({
    children,
}) => {
    const [cards, setCards] = useState([]);
    const [noCardsAvailable, setNoCardsAvailable] = useState(false);

    useEffect(() => {
        cardService.getAll()
            .then(result => {
                initialState = [...result];
                setCards(result);
            });
    }, []);

    const addCard = (cardData) => {
        setCards(state => [
            ...state,
            cardData,
        ]);
        initialState.push(cardData);
    };

    const switchCards = (cardType) => {
        if (cardType === 'all') {
            setCards(initialState);
            setNoCardsAvailable(false);
        } else {
            const children = initialState.filter(x => x.category === cardType);
            if (children.length != 0) {
                setCards(children);
                setNoCardsAvailable(false);
            } else {
                setCards(initialState);
                setNoCardsAvailable(true);
            }
        }
    };

    const editCard = (cardId, cardData) => {
        return setCards(state => state.map(x => x._id === cardId ? cardData : x));
    };

    const removeCard = (cardId) => {
        return setCards(state => state.filter(x => x._id !== cardId));
    };

    return <CardContext.Provider value={{
        cards, addCard, editCard, removeCard, switchCards, noCardsAvailable
    }}>
        {children}
    </CardContext.Provider>;
};

