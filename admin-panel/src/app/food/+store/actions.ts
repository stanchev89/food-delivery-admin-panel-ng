import {createAction, props} from '@ngrx/store';
import {IDish} from "../../interfaces";

const foodNameSpace = '[FOOD]';
export const LOAD_ALL_DISHES = `${foodNameSpace} Load All Dishes`;


export const loadAllDishes = createAction(LOAD_ALL_DISHES,props<{allDishes: IDish[]}>());
