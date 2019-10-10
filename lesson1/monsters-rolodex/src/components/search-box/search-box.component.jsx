import React from 'react'
import './search-box.style.css'

export const SearchBox = ({placeholder, handleChange}) => (
<input className="search" type="search for monsters" placeholder={placeholder} onChange={handleChange} />)
