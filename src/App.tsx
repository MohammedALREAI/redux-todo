import './index.css'
import React from 'react'
import Home from './Screens/home'
import { Route, Routes } from 'react-router-dom'
import { ListIem } from './Screens/ListIem'

export default class App extends React.Component {
    render() {
        return (
            <main>
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/:id" element={<ListIem />} />
                    </Routes>
                </div>
            </main>
        )
    }
}
