import React from 'react'
import './Main.css'
import Feeds from '../components/Feeds/Feeds'
import Sidebar from '../components/Sidebar/Sidebar'
import Widget from '../components/Widgets/Widget'

function Main() {
    return (
        <div className="main_body">
            <Sidebar />
            <Feeds />
            <Widget />
        </div>
    )
}

export default Main
