import React from 'react';
import App from '../App.js';

class Form extends React.Component
{
  render()
  {
    return (
      <form onChange={App.handleChangeInput}>
        <div id="buttons">
          <input type="text" name="input" />
          <label>
              <input onChange={App.handleChangeInput} type="radio" name="button" value="GET" />
              <span>GET</span>
          </label>
          <label>
              <input onChange={App.handleChangeInput} type="radio" name="button" value="POST" />
              <span>POST</span>
          </label>
          <label>
              <input onChange={App.handleChangeInput} type="radio" name="button" value="PUT" />
              <span>PUT</span>
          </label>
          <label>
              <input onChange={App.handleChangeInput} type="radio" name="button" value="DELETE" />
              <span>DELETE</span>
          </label>
        </div>
      </form>
    );
  };
}

export default Form;
