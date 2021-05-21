import React from 'react';

const Button = ({ handleClick }) => {
    return <button type="button" className="btn" onClick={handleClick}>Run Query</button> 
}

export default Button;