import React, { Component } from 'react'
import { Button } from '../Component/Button/Button'
import { ListItem } from '../Component/ListItem/ListItem'
import { Wrapper } from '../Component/Wrapper'
import { addItem, deleteItem, getLists } from '../redux/List/listAction'
import { ItemList } from '../redux/List/type'
import { TState } from '../redux/store'
import { v4 as uuid } from 'uuid'
import { connect } from 'react-redux'
import { ILists } from '../redux/List/ListReducer'

interface State {
    value: string;
    error: boolean;
    list: ItemList[];
}
interface Props {
    deleteItem: (id: string) => void;
    addItem: ({ id, name }: { id: string; name: string }) => void;
    getLists: () => void;
    lists: ILists;
}

class ClassComponnet extends Component<Props, State> {
    state: State = {
        value: '',
        error: false,
        list: [],
    };

    componentDidMount() {
        // if (!this.props.lists.lists.length) {
        this.props.getLists()
        // }
        console.log('test', this.state.list)

        this.setState({
            list: this.props.lists.lists,
        })
        console.log('test2', this.state.list)
    }

    componentDidUpdate(prevProps: any, prevState: any) {
        if (prevState.lists.lists.length !== this.props.lists.lists.length) {
            console.log('pokemons state has changed.')
        }
    }

    onChangeEvent = (e: React.ChangeEvent<HTMLInputElement>): void => {
        if (!e.target.value) {
            this.setState({
                error: false,
            })
            return
        }

        this.setState({ value: e.target.value })
    };

    render() {
        return (
            <>
                <div className="inner-container">
                    <h1 className="page-title">to do list App</h1>
                    <div className=" container input-section">
                        <div className="input_span">
                            <input
                                name="add_value"
                                value={this.state.value}
                                onChange={this.onChangeEvent}
                                className="add-task-input"
                                type="text"
                                placeholder="enter the to do list"
                            />
                            {this.state.error && <span>not add data not ematy </span>}
                        </div>
                        <Button
                            text="Add"
                            onClick={() => this.props.addItem({ id: uuid() as string, name: this.state.value })}
                        />
                    </div>
                </div>
                <div className="items-section">
                    <Wrapper isLoading={this.props.lists?.isLoading} error={this.props.lists?.error}>
                        {this.state.list.map(({ id, title }) => {
                            return (
                                <ListItem
                                    id={String(id)}
                                    key={String(id)}
                                    todo={title}
                                    // eslint-disable-next-line no-return-assign
                                    goRoute={() => ((window as any).location.pathname = `/${id}`)}
                                    handleDeleteAction={() => this.props.deleteItem(id as string)}
                                />
                            )
                        })}
                    </Wrapper>
                </div>
            </>
        )
    }
}

const mapDispatchToProps = (dispatch: Function) => ({
    deleteItem: (id: string) => dispatch(deleteItem(id)),
    addItem: ({ id, name }: { id: string; name: string }) => dispatch(addItem({ id, name })),
    getLists: () => dispatch(getLists()),
})

const mapStateToProps = (state: TState) => ({
    lists: state.list?.lists,
})

export default connect(mapStateToProps, mapDispatchToProps)(ClassComponnet)
