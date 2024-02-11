import {createContext, useReducer, useEffect} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "secretkey";

const CardContext = createContext();

let data = [];

const reducer = (state, action) =>
{
    switch (action.type) {
        case "CreateCard":
            return [
                ...state,
                {
                    cardId: action.payload.cardId,
                    comp: action.payload.comp,
                    date: action.payload.date,
                    rinkNo: action.payload.rinkNo,
                    teamOne: action.payload.teamOne,
                    teamTwo: action.payload.teamTwo,
                    rowsArr: action.payload.rowsArr,
                }
            ];
        case "UpdateCard":
            return state.map((item) => {
                if (item.cardId === action.payload.cardId) {
                    return action.payload;
                } else {
                    return item;
                }
            });
        case "RemoveCard":
            return state.filter((e) => e.cardId !== action.payload.cardId);
        case "Save":
            try {
                AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(state));
            } catch(ex) {
                console.log(ex);
            } finally {
                return state;
            }
        case "Load":
            return [
                ...state,
                {
                    cardId: action.payload.cardId,
                    comp: action.payload.comp,
                    date: new Date(action.payload.date),
                    rinkNo: action.payload.rinkNo,
                    teamOne: action.payload.teamOne,
                    teamTwo: action.payload.teamTwo,
                    rowsArr: action.payload.rowsArr,
                }
            ]
        default:
            return state;
    }
}

export const ItemProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, data);
    
    useEffect(() => {
        const loadStorage = async () => {
            const storage = await AsyncStorage.getItem(STORAGE_KEY);
            if (storage !== null && state.length === 0) {
                data = JSON.parse(storage);
                data.forEach(item => {
                    dispatch({type: "Load", payload: item})
                })
            }
        }
        loadStorage();
    }, [STORAGE_KEY])

    const createCard = (
            cardId, comp, date, rinkNo, teamOne, teamTwo, rowsArr, callback
        ) => {
        dispatch({ type: "CreateCard", payload: {
            cardId, comp, date, rinkNo, teamOne, teamTwo, rowsArr
        } });
        dispatch({ type: "Save" });
        if (callback) {
            callback(cardId);
        }
    }

    const removeCard = (cardId, callback) => {
        dispatch({ type: "RemoveCard", payload: { cardId: cardId }});
        dispatch({ type: "Save" });
        if (callback) callback();
    };

    const updateCard = (cardId, comp, date, rinkNo, teamOne, teamTwo, rowsArr, callback) => {
        dispatch({ type: "UpdateCard", payload: {cardId, comp, date, rinkNo, teamOne, teamTwo, rowsArr}});
        dispatch({ type: "Save" });
        if (callback) callback();
    }

    return (
        <CardContext.Provider 
            value = {{
                state: state,
                createCard: createCard,
                updateCard: updateCard,
                removeCard: removeCard,
            }}
        >
            {children}
        </CardContext.Provider>
    );
};

export default CardContext;