import { ListEnum } from './list.consant.enum'

export interface ItemList {
    userId?: number | string;
    id: number | string;
    title: string;
    completed?: boolean;
}

export interface DeleteActionStart extends Action {
    type: ListEnum.DELETE_LIST_FROM_START;
}

export interface DeleteActionSuccess extends Action {
    type: ListEnum.DELETE_LIST_FROM_SUCCESS;
    payload: {
        lists: ItemList[];
    };
}
export interface DeleteActionSFill extends Action {
    type: ListEnum.DELETE_LIST_FROM_FIELD;
    payload: {
        error: string;
    };
}

export interface GetListsActionStart extends Action {
    type: ListEnum.GET_LISTS_FROM_START;
}

export interface GetListsActionSuccess extends Action {
    type: ListEnum.GET_LISTS_FROM_SUCCESS;
    payload: {
        lists: ItemList[];
    };
}
export interface GetListsActionFill extends Action {
    type: ListEnum.GET_LISTS_FROM_FIELD;
    payload: {
        error: string;
    };
}

export type TListsActionAction = GetListsActionStart | GetListsActionSuccess | GetListsActionFill;

export interface GetListByIdActionStart extends Action {
    type: ListEnum.GET_LIST_ID_FROM_START;
}

export interface GetListByIdActionSSuccess extends Action {
    type: ListEnum.GET_LIST_ID_FROM_SUCCESS;
    payload: {
        list: ItemList;
    };
}
export interface GetListByIdActionSFill extends Action {
    type: ListEnum.GET_LIST_ID_FROM__FIELD;
    payload: {
        error: string;
    };
}

export type TGetListBYIdAction = GetListByIdActionStart | GetListByIdActionSSuccess | GetListByIdActionSFill;

export type TDeleteActionAction = DeleteActionStart | DeleteActionSuccess | DeleteActionSFill;

export interface AddActionStart extends Action {
    type: ListEnum.ADD_LIST_FROM_START;
}

export interface AddActionSuccess extends Action {
    type: ListEnum.ADD_LIST_FROM_SUCCESS;
    payload: { lists: ItemList[] };
}
export interface AddActionSFill extends Action {
    type: ListEnum.ADD_LIST_FROM_FIELD;
    payload: {
        error: string;
    };
}

export type TAddActionAction = AddActionStart | AddActionSuccess | AddActionSFill;

export type ListAction = TListsActionAction | TDeleteActionAction | TAddActionAction | TGetListBYIdAction;
