import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const getFakeMembers = count => new Promise((resolves, rejects) => {
    const api = `https://api.randomuser.me/?nat=US&results=${count}`
    const request = new XMLHttpRequest()
    request.open('GET', api)
    request.onload = () => (request.status == 200) ?
    resolves(JSON.parse(request.response).results) :
    reject(Error(request.statusText))
    request.onerror = err => rejects(err)
    request.send()
})

const Member = ({email, picture, name, location}) => 
    <div className="member">
        <img src={picture.thumbnail} alt=""/>
        <h1>{name.first} {name.last}</h1>
        <p><a href={"mailto:"+email}>{email}</a></p>
        <p>{location.city}, {location.state}</p>
    </div>

ReactDOM.render(
    <div>
        <StarRating/>
    </div>,
    document.getElementById("app")
)