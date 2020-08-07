import React from 'react';
import ReactDOM from 'react-dom';
import LiComment from './LiComment.jsx';

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      commentArray: [
        { "initialLetter": "N", "time": "Friday", "name": "Nimritee", "description": "why has the sales desc" },
        { "initialLetter": "N", "time": "Friday", "name": "Nimritee", "description": "why has the sales desc" },
        { "initialLetter": "N", "time": "Friday", "name": "Nimritee", "description": "why has the sales desc" },
        { "initialLetter": "N", "time": "Friday", "name": "Nimritee", "description": "why has the sales desc" }
      ]
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.value.length > 0) {
      event.preventDefault();
      let commentArray = [...this.state.commentArray];
      commentArray.push({ "initialLetter": "N", "time": "now", "name": "Nimritee", "description": this.state.value })
      this.setState({ commentArray, value: '' })
    }
  }

  render() {
    console.log(this.state.commentArray)
    return (
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
                      <LiComment commentData={this.state.commentArray} />
                      <li className="list-group-item " style={{ padding: 0 }}>
                        <div className="profile-update-option bg-white ht-50 bd d-flex justify-content-end">
                          <div className="d-flex align-items-center pd-x-20 mg-r-auto">
                          <form onSubmit={this.handleSubmit}>
                            <input type="text" defaultValue="" className="form-control align-self-center bd-0" placeholder="Message" value={this.state.value} onChange={this.handleChange}></input>
                          </form>
                          </div>
                          <div class="wd-50 bd-l d-flex align-items-center justify-content-center">
                            <a href="# " className="link-03" data-toggle="tooltip" title="Mention"><i data-feather="at-sign"></i></a>
                          </div>
                          <div class="wd-50 bd-l d-flex align-items-center justify-content-center">
                            <a href="# " className="link-03" data-toggle="tooltip" title="Add GIF"><i data-feather="smile"></i></a>
                          </div>
                          <div className="wd-50 bd-l d-flex align-items-center justify-content-center">
                            <a href="# " className="link-03" data-toggle="tooltip" onClick={this.handleSubmit} title="Send"><i data-feather="send"></i></a>
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
      </div>
    )
  }
}

ReactDOM.render(
  <Comment />,
  document.getElementById('root')
);