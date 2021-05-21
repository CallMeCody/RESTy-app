import React from 'react';
import Axios from 'axios';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from './header/header.js';
import History from './history/History.js';
import Form from './form/form.js';
import Results from './results/results.js';
import Footer from './footer/footer.js';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formValues: {},
      results: [],
    };
  }

  handleChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    let formValues = { ...this.state.formValues, [name]: value}
    this.setState( {formValues} );
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    let url = this.state.formValues.url;
    let method = this.state.formValues.method;
    let bodyText = this.state.formValues.body;

    if(method === "GET") {
      let response = await Axios.get(url);
      let results = response;
      this.setState( {...this.state, results }  )
    }
    if(method === "POST") {
      await Axios.post(url, bodyText)
    }
    if(method === "PUT") {
      await Axios.put(url, bodyText)
    }
    if(method === "DELETE") {
      await Axios.delete(url)
    }

    localStorage.setItem('history', JSON.stringify(this.state.results))
  }

  render() {
    
    return (
      <Router>
        <Route exact path="/history">
          <History />
        </Route>
        <Header />
        <div>
            <Form handleChangeInput={this.handleChangeInput}
                  handleSubmit={this.handleSubmit} />
            <Results visible={this.state.showData}
                     results={this.state.results} />
        </div>
        <Footer />
      </Router>
    );
  }

}

export default App;