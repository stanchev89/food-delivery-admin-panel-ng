import {IDish} from "../../interfaces";
import {createReducer,on} from "@ngrx/store";
import * as foodActions from './actions';


export interface IFoodState{
  allDishes: IDish[]
};

const initialState: IFoodState = {
  allDishes: []
};

export const reducers = createReducer<IFoodState>(
  initialState,
  on(foodActions.loadAllDishes,(state: IFoodState, action: ReturnType<typeof foodActions.loadAllDishes>) => {
    return {
      ...state,
      allDishes: action.allDishes
    }
  })
);
