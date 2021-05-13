import React from 'react';
import App from '../App.js';

class Form extends React.Component {
  render() {
    return ( 
      <form>
        <input type="text" onChange={this.handleChangeInput} />
        <button type="radio">GET</button>
        <button type="radio">POST</button>
        <button type="radio">UPDATE</button>
        <button type="radio">DELETE</button>
      </form>
    );
  };
}

export default Form;