import React from 'react';

import Header from './header/header.js';
import Footer from './footer/footer.js';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      words: "Type Something...",
      formValues: {}
    };
  }

  handleChangeInput = (e) => {
    let fieldName = e.target.name;
    let value = e.target.value;
    let formValues = { ...this.state.formValues, [fieldName]: value}
    this.setState( {formValues} );
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState( {...this.state, words: this.state.formValues.words} )
  }

  render() {
    return (
      <>
        <Header />
        <h2>{this.state.words}</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type="text" name="words" onChange={this.handleChangeInput} />
          </div>
          <div>
            <label>
              <input onChange={this.handleChangeInput} type="radio" name="button"  value="GET" />
              <span>GET</span>
            </label>
            <label>
              <input onChange={this.handleChangeInput} type="radio" name="button" value="POST" />
              <span>POST</span>
            </label>
            <label>
              <input onChange={this.handleChangeInput} type="radio" name="button" value="PUT" />
              <span>PUT</span>
            </label>
            <label>
              <input onChange={this.handleChangeInput} type="radio" name="button" value="DELETE" />
              <span>DELETE</span>
            </label>
          </div>
          <button>Submit</button>
        </form>
        <Footer />
      </>
    );
  }

}

export default App;