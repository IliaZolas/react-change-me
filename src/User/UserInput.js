// UserInput should hold an input element
// render an <input> element using react JSX
import React from 'react';
import './UserInput.css';

const UserInput = (props) => {
const inputStyle = {
    border: '0px',
    textAlign: 'center',
    borderRadius: '10px',
    height: '30px'
};

    return <div className="InputArea">
            <input 
                type="text" 
                onChange={props.changed}
                value={props.currentName}
                style={inputStyle}
                />
    </div>
};

export default UserInput;