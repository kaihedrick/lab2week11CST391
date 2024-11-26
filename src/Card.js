import React from 'react';
import './Card.css';

//Card implementation
//we want to display the flag of country, name, and alt name
const Card = ({ country }) => {
    return (
        <div className="card">
            <img src={country.flags.svg} alt={`${country.name.common} flag`} />
            <h2>{country.name.common}</h2>
        </div>
    );
};

export default Card;
