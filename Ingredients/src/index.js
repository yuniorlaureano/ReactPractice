import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const Start = ({selected=false, onClick= f => f}) =>(
    <div className={(selected) ? "star selected" : "star"} onClick={onClick}>

    </div>
);

Start.propTypes = {
    selected: PropTypes.bool,
    onClick: PropTypes.func
};

class StartRating extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            starsSelected: 0
        };
        this.change = this.change.bind(this);
    }

    static propTypes = {
        totalStars: PropTypes.number
    };

    static defaultProps = {
        totalStars: 5
    };

    change(starsSelected) {
        this.setState({
            starsSelected: starsSelected
        });
    }

    render(){
        const {totalStars} = this.props;
        const {starsSelected} = this.state;
        return (
            <div className="star-rating">
                {[...Array(totalStars)].map((n,i)=>
                        <Start key={i} 
                               selected={i<starsSelected}
                               onClick={()=> this.change(i + 1)}/>)}
                <p>{starsSelected} of {totalStars} starts</p>
            </div>
        );
    }
}

    ReactDOM.render(
        <div>
            <Summary {...data}/>
            <Menu recipes={data} title="Delicious Recipes" />
        </div>,
        document.getElementById("app")
    )