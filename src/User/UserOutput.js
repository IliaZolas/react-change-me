// UserOutput two paragraphs
// render 2 paragraphs JSX
import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
    return <div className="ParagraphContainer">
        <p className="Paragraph" >{props.userName}</p>
    </div>
};

export default UserOutput;