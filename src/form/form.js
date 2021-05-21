import React from 'react';

class Form extends React.Component {

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div>
          <input type="text" name="url" onChange={this.props.handleChangeInput} />
        </div>
        <div>
          <label>
            <input onChange={this.props.handleChangeInput} type="radio" name="method" value="GET" />
            <span>GET</span>
          </label>
          <label>
            <input onChange={this.props.handleChangeInput} type="radio" name="method" value="POST" />
            <span>POST</span>
          </label>
          <label>
            <input onChange={this.props.handleChangeInput} type="radio" name="method" value="PUT" />
            <span>PUT</span>
          </label>
          <label>
            <input onChange={this.props.handleChangeInput} type="radio" name="method" value="DELETE" />
            <span>DELETE</span>
          </label>
        </div>
        <button onClick={this.props.handleSubmit}>Go!</button>
        <div>
          <textarea name="body" onChange={this.props.handleChangeInput}></textarea>
        </div>
      </form>
    );
  }
};

export default Form;
