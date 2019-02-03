import React from 'react';
import ReactDOM from 'react-dom';

const IngredientsList = React.createClass({
    displayName: "IngredientsList",
    render() {
    return React.createElement("ul", {className: "ingredients"},
    this.props.items.map((ingredient, i) =>
    React.createElement("li", { key: i }, ingredient)
    )
    )
    }
    })
    const items = [
    "1 lb Salmon",
    "1 cup Pine Nuts",
    "2 cups Butter Lettuce",
    "1 Yellow Squash",
    "1/2 cup Olive Oil",
    "3 cloves of Garlic"
    ]
    ReactDOM.render(
    React.createElement(IngredientsList, {items}, null),
    document.getElementById('react-container')
    )