import React from 'react'
import {MdSearch} from "react-icons/md"

interface SearchProps {
    setSearchText: React.Dispatch<React.SetStateAction<string>>
}

const Search = ({setSearchText}: SearchProps) => {
  return (
    <div className="search">
        <MdSearch className="search-icons" size="1.3rem"/>
    <input
    onChange={(e) => setSearchText(e.target.value)}
    
    type="text" placeholder='search' />
    </div>
  )
}

export default Search









