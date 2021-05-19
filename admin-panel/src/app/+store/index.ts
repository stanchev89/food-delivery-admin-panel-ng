import {IGlobalState, reducers as globalReducers} from "./reducers";
import {ActionReducerMap} from "@ngrx/store";
import {IFoodState} from "../food/+store/reducers";
import * as fromFood from '../food/+store/reducers'

export interface AppRootState {
    readonly globals: IGlobalState,
    readonly food: IFoodState
}

export const reducers: ActionReducerMap<AppRootState> = {
    globals: globalReducers,
    food: fromFood.reducers
};
