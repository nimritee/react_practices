import React from 'react';

const LiComment = ({ commentData }) => {
    return commentData.map(function (innerData,index) {
        return (<li className="list-group-item" key={"test-"+index}>
            <div className="media">
                <div className="avatar">
                    <span className="avatar-initial rounded-circle">{innerData.initialLetter}</span>
                </div>
                <div className="media-body">
                    <h6>
                        {innerData.name} <small>{innerData.time}</small>
                    </h6>
                    <div class="dropdown-file">
                        <a href="javascript:void(0)" className="dropdown-link" data-toggle="dropdown"><i data-feather="more-vertical"></i></a>
                        <div className="dropdown-menu dropdown-menu-right">
                            <a href="javascript:void(0)" className="dropdown-item rename"><i data-feather="edit"></i>Edit</a>
                            <a href="javascript:void(0)" className="dropdown-item delete"><i data-feather="trash"></i>Delete</a>
                        </div>
                    </div>
                    <p>{innerData.description}</p>
                </div>
            </div>
        </li>)
    })
}

export default LiComment