import { selector } from "recoil";
import { userState } from "../atoms/amount";


export const  AmountState = selector({
    key: 'amountState',
    get: ({get}) => {
        const state = get(userState);
        return state.intialAmount
    }
})