import React,{useEffect,useState} from 'react'
import SearchBox from './SearchBox'
import Card from './Card'
import './UserCards.css'
function UserCards(props) {
    const [username,setusername]=useState('yunus9175');
    const [realname ,setrealName]=useState('');
    const [avatar,setavatar]=useState('');
    const [location,setlocation]=useState('');
    const [repos,setrepos]=useState('');
    const [followers,setfollowers]=useState('');
    const [url,seturl]=useState('');
    const [notFound,setnotFound]=useState('');
      // the api request function
 function fetchApi(url) { 
    
    fetch(url)
      .then((res) => res.json() )
      .then((data) => {
        
        // update state with API data
        
          setusername(data.login)
          setrealName(data.name)
          setavatar(data.avatar_url)
          setlocation(data.location)
          setrepos(data.public_repos)
          setfollowers(data.followers)
          seturl (data.html_url)
          setnotFound (data.message)
       
      })
      .catch((err) => console.log('oh no!') )
  }
  
  const fetchUser=(username)=> {
    let url = `https://api.github.com/users/${username}`
    fetchApi(url)
  }
  
  useEffect(()=> {
    let url = `https://api.github.com/users/${username}`
    fetchApi(url)
  
},[])
    return (
      
               
      <div className="main_div1">
        <SearchBox fetchUser={fetchUser}/>
        <Card username={username}realname={realname}
        avatar={avatar}location={location}repos={repos}
        followers={followers}url={url} notFound={notFound}/>
      </div>
    
  
        
    )
}

export default UserCards
