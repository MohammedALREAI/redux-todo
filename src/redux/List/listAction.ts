import { TGetListBYIdAction } from './type.d'
import { Dispatch } from 'react'
import Api from '../../utils/Api'
import { TState } from '../store'
import { ListEnum } from './list.consant.enum'
import { ItemList, TAddActionAction, TDeleteActionAction, TListsActionAction } from './type'

export const addItem = ({ id, name }: { id: string; name: string }) => {
    return (dispatch: Dispatch<TAddActionAction>, getState: () => TState) => {
        const oldList = getState().list?.lists.lists as ItemList[]
        const newListIem = {
            userId: 1,
            id: id,
            title: name,
            completed: false,
        }
        dispatch({
            type: ListEnum.ADD_LIST_FROM_SUCCESS,
            payload: {
                lists: [newListIem, ...oldList],
            },
        })
    }
}

export const deleteItem = (id: string) => {
    return (dispatch: Dispatch<TDeleteActionAction>, getState: () => TState) => {
        console.log('test1')

        dispatch({
            type: ListEnum.DELETE_LIST_FROM_START,
        })

        try {
            const data = getState().list.lists.lists.filter((x) => String(x.id) !== String(id))
            console.log('data', data)

            dispatch({
                type: ListEnum.DELETE_LIST_FROM_SUCCESS,
                payload: {
                    lists: data,
                },
            })

            console.log(' getState()', getState())
        } catch (error: any) {
            dispatch({
                type: ListEnum.DELETE_LIST_FROM_FIELD,
                payload: {
                    error: error.message as unknown as string,
                },
            })
        }
    }
}
export const getLists = () => {
    return async (dispatch: Dispatch<TListsActionAction>) => {
        dispatch({
            type: ListEnum.GET_LISTS_FROM_START,
        })

        try {
            const resp = await Api.get('todos')

            dispatch({
                type: ListEnum.GET_LISTS_FROM_SUCCESS,
                payload: {
                    lists: resp.data as Array<ItemList>,
                },
            })
        } catch (error: any) {
            dispatch({
                type: ListEnum.GET_LISTS_FROM_FIELD,
                payload: {
                    error: error.message as unknown as string,
                },
            })
        }
    }
}
export const getListID = (id: string) => {
    return async (dispatch: Dispatch<TGetListBYIdAction>) => {
        dispatch({
            type: ListEnum.GET_LIST_ID_FROM_START,
        })

        try {
            const resp = await Api.get(`todos/${id}`)
            dispatch({
                type: ListEnum.GET_LIST_ID_FROM_SUCCESS,
                payload: {
                    list: resp.data as ItemList,
                },
            })
        } catch (error: any) {
            dispatch({
                type: ListEnum.GET_LIST_ID_FROM__FIELD,
                payload: {
                    error: error.message as unknown as string,
                },
            })
        }
    }
}
