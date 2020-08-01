import React from 'react';
import ReactDOM from 'react-dom';
import LiComment from './LiComment.jsx';

const commentArray =[
  {"initialLetter":"A","time":"Friday","name":"Nimritee","description":"why has the sales desc"},
  {"initialLetter":"A","time":"Friday","name":"Nimritee","description":"why has the sales desc"},
  {"initialLetter":"A","time":"Friday","name":"Nimritee","description":"why has the sales desc"},
  {"initialLetter":"A","time":"Friday","name":"Nimritee","description":"why has the sales desc"}
];

ReactDOM.render(
  <div>
    <div className="app chat mg-t-10">
      <div className="container pd-x-0 pd-lg-x-10 pd-xl-x-0">
        <div className="df-example" data-label="Example">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link"
                id="home-tab"
                data-toggle="tab"
                href="#home"
                role="tab"

              >
                Description
          </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                id="profile-tab"
                data-toggle="tab"
                href="#profile"
                role="tab"
              >
                Comment
          </a>
            </li>
          </ul>
          <div className="tab-content bd bd-gray-300 bd-t-0" id="myTabContent">
            <div
              className="tab-pane"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <h6>Home</h6>
              <p>...</p>
            </div>
            <div
              className="tab-pane show active"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <div className="chat-group pd-0" style={{ padding: 0 }}>
                <ul className="list-group">
                  <LiComment commentData={commentArray}/>
                  <li className="list-group-item pd-0 border-0">
                    <div className="profile-update-option bg-white ht-50 bd d-flex justify-content-end rounded">
                      <div className="d-flex align-items-center pd-x-20 mg-r-auto">
                        <i data-feather="edit-3" />{" "}
                        <a href="#" className="link-03 mg-l-10">
                          <span className="d-none d-sm-inline">Share an</span>{" "}
                      Update
                    </a>
                      </div>
                      <div className="wd-50 bd-l d-flex align-items-center justify-content-center">
                        <a
                          href="#"
                          className="link-03"
                          data-toggle="tooltip"
                          title="Publish Photo"
                        >
                          <i data-feather="image" />
                        </a>
                      </div>
                      <div className="wd-50 bd-l d-flex align-items-center justify-content-center">
                        <a
                          href="#"
                          className="link-03"
                          data-toggle="tooltip"
                          title="Publish Video"
                        >
                          <i data-feather="video" />
                        </a>
                      </div>
                      <div className="wd-50 bd-l d-flex align-items-center justify-content-center">
                        <a
                          href="#"
                          className="link-03"
                          data-toggle="tooltip"
                          title="Write an Article"
                        >
                          <i data-feather="file-text" />
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* append theme customizer */}
    </div>
  </div>,

  document.getElementById('root')
);