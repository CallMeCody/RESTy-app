import React from 'react';
import './app.css';

import Header from './header/header.js';
import Form from './form/form.js';
import Footer from './footer/footer.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      words: "type something"
    };
  }

  handleChangeInput = (event) => {
    let words = event.target.value;
    console.log(words);
  }

  render() {
    return ( 
      <>
      <Header />
      <div>{this.state.words}</div> 
      <Form />
      <Footer />
      </>
    );
  };
}

export default App;