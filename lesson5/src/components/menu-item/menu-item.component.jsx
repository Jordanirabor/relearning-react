import React from 'react'
import './menu-item.style.scss'

const MenuItem = (props) => (
    <div style={{backgroundImage: `url(${props.imageUrl})`}} className='menu-item'>
        <div className='content'>
            <h1 className='title'> {props.title} </h1>
            <span className='subtitle'> SHOP NOW</span>
        </div>
    </div>
)

export default MenuItem