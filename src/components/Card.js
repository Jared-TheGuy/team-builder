import React, {useState} from 'react';


const tester = [
    {name: "Goof", role: "Boof"}
]



export default function Card(props) {
    return (
        <div className="card">
            <p className="name">{props.name}</p>
            <img alt="profile pic" src="https://i.pinimg.com/474x/d3/61/73/d3617350f504a856d2a0c0628ad10566--female-silhouettes-girl-silhouette.jpg"/>
            <p className="role">{props.role}</p>
        </div>
    )
}