import React from 'react';

const LiComment = ({ commentData }) => {
    var comments = commentData.map(function (innerData) {
        return (<li className="list-group-item">
            <div className="media">
                <div className="avatar">
                    <span className="avatar-initial rounded-circle">{innerData.initialLetter}</span>
                </div>
                <div className="media-body">
                    <h6>
                        {innerData.name} <small>{innerData.time}</small>
                    </h6>
                    <p>{innerData.description}</p>
                </div>
            </div>
        </li>)
    })
    return comments;
}

export default LiComment