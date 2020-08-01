import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './dashforge.demo.css';
import './chat.css';
import './dashforge.css';
import './all.min.css';
import './ionicons.min.css';

ReactDOM.render(
  <div>
    {/* Required meta tags */}
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    {/* Twitter */}
    <meta name="twitter:site" content="@themepixels" />
    <meta name="twitter:creator" content="@themepixels" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="DashForge" />
    <meta
      name="twitter:description"
      content="Responsive Bootstrap 4 Dashboard Template"
    />
    <meta
      name="twitter:image"
      content="http://themepixels.me/dashforge/img/dashforge-social.png"
    />
    {/* Facebook */}
    <meta property="og:url" content="http://themepixels.me/dashforge" />
    <meta property="og:title" content="DashForge" />
    <meta
      property="og:description"
      content="Responsive Bootstrap 4 Dashboard Template"
    />
    <meta
      property="og:image"
      content="http://themepixels.me/dashforge/img/dashforge-social.png"
    />
    <meta
      property="og:image:secure_url"
      content="http://themepixels.me/dashforge/img/dashforge-social.png"
    />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:image:width" content={1200} />
    <meta property="og:image:height" content={600} />
    {/* Meta */}
    <meta name="author" content="ThemePixels" />
    {/* Favicon */}
    <link
      rel="shortcut icon"
      type="image/x-icon"
      href="../../assets/img/favicon.png"
    />
    {/* vendor css */}
    <link href="all.min.css" rel="stylesheet" />
    <link href="ionicons.min.css" rel="stylesheet" />
    <div classNamen="app chat mg-t-10">
      <div className="container pd-x-0 pd-lg-x-10 pd-xl-x-0">
        <div className="df-example" data-label="Example">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="home-tab"
                data-toggle="tab"
                href="#home"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                Description
          </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="profile-tab"
                data-toggle="tab"
                href="#profile"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                Comment
          </a>
            </li>
          </ul>
          <div className="tab-content bd bd-gray-300 bd-t-0" id="myTabContent">
            <div
              className="tab-pane show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <h6>Home</h6>
              <p>...</p>
            </div>
            <div
              className="tab-pane"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <div className="chat-group pd-0" style={{ padding: 0 }}>
                <ul className="list-group">
                  <li className="list-group-item">
                    <div className="media">
                      <div className="avatar">
                        <span className="avatar-initial rounded-circle">k</span>
                      </div>
                      <div className="media-body">
                        <h6>
                          katherine <small>Today at 1:30am</small>
                        </h6>
                        <p>
                          Hello everyone, this is my first message to this channel
                    </p>
                        <p>anybody here?</p>
                      </div>
                      {/* media-body */}
                    </div>
                    {/* media */}
                  </li>
                  <li className="list-group-item">
                    <div className="media">
                      <div className="avatar">
                        <span className="avatar-initial rounded-circle">k</span>
                      </div>
                      <div className="media-body">
                        <h6>
                          katherine <small>Yesterday at 4:10am</small>
                        </h6>
                        <p>I'm back once again!!</p>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when looking
                          at its layout.
                    </p>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration in
                          some form, by injected humour, or randomised words which
                          don't look even slightly believable.
                    </p>
                      </div>
                      {/* media-body */}
                    </div>
                    {/* media */}
                  </li>
                  <li className="list-group-item">
                    <div className="media">
                      <div className="avatar">
                        <img
                          src="https://via.placeholder.com/350"
                          className="rounded-circle"
                          alt
                        />
                      </div>
                      <div className="media-body">
                        <h6>
                          situmay <small>Yesterday at 4:15am</small>
                        </h6>
                        <p>Excepteur sint occaecat cupidatat non proident</p>
                        <p>
                          Quis autem vel eum iure reprehenderit qui in ea voluptate
                          velit esse...
                    </p>
                      </div>
                      {/* media-body */}
                    </div>
                    {/* media */}
                  </li>
                  <li className="list-group-item">
                    <div className="media">
                      <div className="avatar">
                        <img
                          src="https://via.placeholder.com/500"
                          className="rounded-circle"
                          alt
                        />
                      </div>
                      <div className="media-body">
                        <h6>
                          rlabares <small>Today at 9:40am</small>
                        </h6>
                        <p>Nam libero tempore, cum soluta nobis</p>
                      </div>
                      {/* media-body */}
                    </div>
                    {/* media */}
                  </li>
                  <li className="list-group-item">
                    <div className="media">
                      <div className="avatar">
                        <span className="avatar-initial rounded-circle">k</span>
                      </div>
                      <div className="media-body">
                        <h6>
                          katherine <small>Today at 10:05am</small>
                        </h6>
                        <p>I'm back once again!!</p>
                        <p>
                          Et harum quidem rerum facilis est et expedita distinctio.
                    </p>
                        <p>
                          Nam libero tempore, cum soluta nobis est eligendi optio
                          cumque nihil impedit quo minus id quod maxime placeat
                          facere possimus.
                    </p>
                      </div>
                      {/* media-body */}
                    </div>
                    {/* media */}
                  </li>
                  <li className="list-group-item pd-0 border-0">
                    <div className="profile-update-option bg-white ht-50 bd d-flex justify-content-end rounded">
                      <div className="d-flex align-items-center pd-x-20 mg-r-auto">
                        <i data-feather="edit-3" />{" "}
                        <a href className="link-03 mg-l-10">
                          <span className="d-none d-sm-inline">Share an</span>{" "}
                      Update
                    </a>
                      </div>
                      <div className="wd-50 bd-l d-flex align-items-center justify-content-center">
                        <a
                          href
                          className="link-03"
                          data-toggle="tooltip"
                          title="Publish Photo"
                        >
                          <i data-feather="image" />
                        </a>
                      </div>
                      <div className="wd-50 bd-l d-flex align-items-center justify-content-center">
                        <a
                          href
                          className="link-03"
                          data-toggle="tooltip"
                          title="Publish Video"
                        >
                          <i data-feather="video" />
                        </a>
                      </div>
                      <div className="wd-50 bd-l d-flex align-items-center justify-content-center">
                        <a
                          href
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