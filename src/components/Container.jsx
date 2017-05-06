import React, { Component } from 'react';
const API_KEY = 'Anj637BlDTyMhOXjonqruz';
const processAPI = 'https://process.filestackapi.com';

export default class Container extends Component {

  constructor (props) {
    super(props);
    this.state = { url: null };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const url = `${processAPI}/${API_KEY}/urlscreenshot=agent:${this.agent.checked ? 'mobile' : 'desktop'}/${this.url.value}`;
    this.setState({ url });
  }

  render () {
    const { url } = this.state;
    return (
      <div className="container">
        <div className="page-header">
          <h1>Filestack URL Screenshot <small>in action</small></h1>
        </div>
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center">
            <div className="thumbnail">
              <img
                className="img-responsive"
                src={url || 'http://placehold.it/800x600?text=Screenshot'}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="text-center">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter the url..."
                  ref={(input) => this.url = input}
                />
              </div>
              <div className="form-group">
                <input
                  type="checkbox"
                  name="agent"
                  ref={(input) => this.agent = input}
                /> Mobile
              </div>
              <button type="submit" className="btn btn-filestack">
                <i className="glyphicon glyphicon-upload" /> Upload
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
