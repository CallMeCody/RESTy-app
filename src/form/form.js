import React from 'react';

import Axios from 'axios';

class Form extends React.Component {

  render() {
    return (
      <form onSubmit={this.props.fetchData}>
        <div>
          <input type="text" name="url" onChange={this.props.handleChangeInput} />
        </div>
        <div>
          <label>
            <input onChange={this.props.handleChangeInput} type="radio" name="button" value="GET" />
            <span>GET</span>
          </label>
          <label>
            <input onChange={this.props.handleChangeInput} type="radio" name="button" value="POST" />
            <span>POST</span>
          </label>
          <label>
            <input onChange={this.props.handleChangeInput} type="radio" name="button" value="PUT" />
            <span>PUT</span>
          </label>
          <label>
            <input onChange={this.props.handleChangeInput} type="radio" name="button" value="DELETE" />
            <span>DELETE</span>
          </label>
        </div>
        <button onClick={this.props.fetchData}>Fetch</button>
      </form>
    );
  }
};

export default Form;
