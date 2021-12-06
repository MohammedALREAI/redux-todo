import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Wrapper } from '../Component/Wrapper'
import { getListID } from '../redux/List/listAction'
import { TState } from '../redux/store'

export const ListIem = () => {
    const { id } = useParams<string>()

    const dispatch = useDispatch()
    const { list, isLoading, error } = useSelector((state: TState) => state.list?.list)
    useEffect(() => {
        if (!id) return
        dispatch(getListID(id))
    }, [dispatch])
    console.log('teeee', list)

    return (
        <Wrapper isLoading={isLoading} error={error}>
            <section className="list-item">
                <span className="task-title">{list?.title || ''}</span>
            </section>
        </Wrapper>
    )
}
