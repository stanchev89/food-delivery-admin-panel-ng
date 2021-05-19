import {createReducer,on} from '@ngrx/store'
import {setSelectedMenu} from "./actions";
import {TypedAction} from "@ngrx/store/src/models";

export interface IGlobalState {
  asideMenu: {} | null
};

export const initialGlobalState: IGlobalState = {
  asideMenu: null
};

export const reducers = createReducer(
  initialGlobalState,
    on(setSelectedMenu,((state: IGlobalState,action) => {
      return {
        ...state,
        asideMenu: action.asideMenu
      }
    }))
);
