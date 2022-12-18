import React from 'react'
import './MyBar.css'

function MyBar() {
    return (
        <ul>
            <li><a className="active" href="/">Myapp</a></li>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
        </ul>
    )
}

export default MyBar