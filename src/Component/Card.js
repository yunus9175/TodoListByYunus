import React from 'react'
import './UserCards.css'

function Card(props) {
    
    
    if (props.notFound === 'Not Found') {
      // when username is not found...
      return <h3 className="card__notfound">User not found. Try again!</h3>
    } else {
      // if username found, then...
      return (
        <div className="card">
          <a href={props.url} target="_blank">
            <img className="card__avatar" src={props.avatar} />             
          </a>
          <h2 className="card__username">
            <a className="card__link" href={props.url} target="_blank">{props.username}</a></h2>
          <dl>
            <dt>Real name</dt>
            <dd>{props.realName}</dd>

            <dt>Location</dt>
            <dd>{props.location}</dd>

            <dt>Number of public repos</dt>
            <dd>{props.repos}</dd>

            <dt>Number of followers</dt>
            <dd>{props.followers}</dd>
          </dl>
        </div>
      )
    }
  }

export default Card
