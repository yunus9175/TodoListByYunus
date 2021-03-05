import React from 'react'
import './UserCards.css'

function SearchBox(props) {
   const handleClick=(e)=> {
        // e.preventDefault()
        let username =document.getElementById('search').value
        // sending the username value to parent component to fetch new data from API
        props.fetchUser(username)
        document.getElementById('search').value = ''
      }
    
    return (
      <>
       <div className="searchbox">
          <input id="search" className="searchbox__input" placeholder="type username..."/>
          <button className="searchbox__button" onClick={handleClick}>Search GitHub User</button>
          </div>
        </>
      )
    }
    
    
  

export default SearchBox
