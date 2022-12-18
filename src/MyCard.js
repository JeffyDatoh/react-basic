import React from 'react'
import './MyCard.css'

function MyCard() {
    return (
        <div className="card">
            <img src="https://www.mecallapi.com/attractions/1.jpg" alt="Phi Phi Islands" style={{width:"100%"}} />
            <div className="container">
                <h4><b>Phi Phi Islands</b></h4>
                <p>Phi Phi Islands are a group of islands in Thailand between the large island of Phuket and the Malacca Coastal Strait of Thailand.</p>
            </div>
        </div>
    )
}

export default MyCard