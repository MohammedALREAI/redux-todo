import { ListEnum } from './list.consant.enum'
import { ItemList, ListAction } from './type.d'

interface IListItem {
    lists: {
        isLoading: boolean;
        error: string;
        lists: Array<ItemList>;
    };
    list: {
        isLoading: boolean;
        error: string;
        list: ItemList;
    };
}

export const ListReducer = (
    initialState: IListItem = {
        lists: {
            isLoading: false,
            error: '',
            lists: [],
        },

        list: {
            isLoading: false,
            error: '',
            list: {} as ItemList,
        },
    },
    action: ListAction,
) => {
    switch (action.type) {
        case ListEnum.GET_LIST_ID_FROM_START:
            return {
                ...initialState,
                list: {
                    ...initialState.list,
                    isLoading: true,
                },
            }
        case ListEnum.GET_LIST_ID_FROM_SUCCESS:
            return {
                ...initialState,
                list: {
                    ...initialState.list,
                    isLoading: false,
                    list: action.payload.list,
                },
            }
        case ListEnum.GET_LIST_ID_FROM__FIELD:
            return {
                ...initialState,
                list: {
                    ...initialState.list,
                    error: action.payload.error,
                },
            }



/****
 * dealte  item
 *
 *
 */

 case ListEnum.DELETE_LIST_FROM_START:
    return {
        ...initialState,
        lists: {
            ...initialState.lists,
            isLoading: true,
        },
    }
case ListEnum.DELETE_LIST_FROM_SUCCESS:
    return {
        ...initialState,
        lists: {
            ...initialState.lists,
            isLoading: false,
            lists: action.payload.lists,
        },
    }
case ListEnum.DELETE_LIST_FROM_FIELD:
    return {
        ...initialState,
        lists: {
            ...initialState.lists,
            error: action.payload.error,
        },
    }









        /***   start Get  all  items   item  list   */

        case ListEnum.GET_LISTS_FROM_START:
            return {
                ...initialState,
                lists: {
                    ...initialState.lists,
                    isLoading: true,
                },
            }

        case ListEnum.GET_LISTS_FROM_SUCCESS:
            return {
                ...initialState,
                lists: {
                    ...initialState.lists,
                    isLoading: false,
                    lists: action.payload.lists,
                },
            }

        case ListEnum.GET_LISTS_FROM_FIELD:
            return {
                ...initialState,
                lists: {
                    ...initialState.lists,
                    error: action.payload.error,
                },
            }
        /***   start Get  all  items   item  list   */

        /***  STAT add  item  list   */
        case ListEnum.ADD_LIST_FROM_START:
            return {
                ...initialState,
                lists: {
                    ...initialState.lists,
                    isLoading: true,
                },
            }
        case ListEnum.ADD_LIST_FROM_SUCCESS:
            return {
                ...initialState,
                lists: {
                    ...initialState.lists,
                    isLoading: false,
                    lists: action.payload.lists,
                },
            }

        case ListEnum.ADD_LIST_FROM_FIELD:
            return {
                ...initialState,
                lists: {
                    ...initialState.lists,
                    error: action.payload.error,
                },
            }
        /***  End  add  item  list   */

        /***  get  by  id   item  from  list   */

        default:
            return initialState
    }
}
