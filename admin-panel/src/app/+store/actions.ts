import {createAction, props} from '@ngrx/store'

export const SET_ASIDE_MENU = '[ASIDE] Set Aside Menu';
export const setSelectedMenu = createAction(SET_ASIDE_MENU, props<{ asideMenu: {} | null }>());
