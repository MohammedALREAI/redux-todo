import React, { useState, useEffect } from 'react'
import { Button } from '../Component/Button/Button'
import './index.css'
import { v4 as uuid } from 'uuid'
import { ListItem } from '../Component/ListItem/ListItem'
import { TState } from '../redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, deleteItem, getLists } from '../redux/List/listAction'
import { Wrapper } from '../Component/Wrapper'
import { useNavigate } from 'react-router-dom'
import { ItemList } from '../redux/List/type'

type Todo = {
    id: string;
    title: string;
};
export type TTodo = Array<Todo>;

const home = () => {
    const [value, setValue] = useState<string>('')
    const [error, setError] = useState<boolean>(false)

    const lists = useSelector((state: TState) => state.list?.lists)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [state, setstate] = useState<ItemList[]>([])

    useEffect(() => {
        if (!lists.lists.length) {
            dispatch(getLists())
        }
        setstate(lists.lists)
    }, [dispatch, lists.lists.length])

    const onChangeEvent = (e: React.ChangeEvent<HTMLInputElement>): void => {
        if (!e.target.value) {
            setError(true)
            return
        }

        setValue(String(e.target.value))
    }

    return (
        <>
            <div className="inner-container">
                <h1 className="page-title">to do list App</h1>
                <div className=" container input-section">
                    <div className="input_span">
                        <input
                            name="add_value"
                            value={value}
                            onChange={onChangeEvent}
                            className="add-task-input"
                            type="text"
                            placeholder="enter the to do list"
                        />
                        {error && <span>not add data not ematy </span>}
                    </div>
                    <Button text="Add" onClick={() => dispatch(addItem({ id: uuid(), name: value }))} />
                </div>
            </div>
            <div className="items-section">
                <Wrapper isLoading={lists?.isLoading} error={lists?.error}>
                    {state.map(({ id, title }) => {
                        return (
                            <ListItem
                                id={String(id)}
                                key={String(id)}
                                todo={title}
                                goRoute={() => navigate(`/${id}`)}
                                handleDeleteAction={() => dispatch(deleteItem(id as string))}
                            />
                        )
                    })}
                </Wrapper>
            </div>
        </>
    )
}

export default home
