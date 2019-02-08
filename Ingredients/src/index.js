import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import unmountComponentAtNode from 'react-dom';
const target = document.getElementById('app')

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

class MerberList extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            members: [],
            loading: false,
            error: null
        }
    }

    componentWillMount(){
        this.setState({loading: true});
        getFakeMembers(this.props.count).then(members => {
            this.setState({members, loading: false});
        }, error => {
            this.setState({error, loading: false});
        });
    }

    componentWillUpdate(){
        console.log('updating lifecycle...');
    }

    render(){
        const {members, loading, error} = this.state;
        return (
            <div className="member-list">
                {(loading)?
                    <span>Loading Mermbers</span>: 
                    (members.length)?
                        members.map((user, i)=> <Member key={i} {...user} />): <span>0 members load...</span>
                }
                { (error)? <p>Error Loading Mermbers: error</p>: "" }
            </div>
        );
    }
}

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = getClockTime();
    }

    componentDidMount(){
        console.log("Starting clock");
        this.ticking = setInterval(() => {
            this.setState(getClockTime())
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.ticking);
        console.log("Stoping Clock");
    }
    render(){
        const {hours, minutes, seconds, timeOfDay} = this.state;
        return (
            <div className="clock">
                <span>{hours}</span>
                <span>:</span>
                <span>{minutes}</span>
                <span>:</span>
                <span>{seconds}</span>
                <span>{timeOfDay}</span>
                <button onClick={this.props.onClose}>x</button>
            </div>
        );
    }
}

ReactDOM.render(
    <div>
        <Clock onClose={()=> unmountComponentAtNode(target)} />
    </div>,
    document.getElementById("app")
)