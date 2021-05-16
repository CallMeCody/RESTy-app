import React from 'react';
import Axios from 'axios';
import JSONPretty from 'react-json-prettify'
import {atelierSulphurpoolLight} from 'react-json-prettify/dist/themes';

import Header from './header/header.js';
import Form from './form/form.js';
import Results from './results/results.js';
import Footer from './footer/footer.js';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showData: false,
      formValues: {},
      results: []
    };
  }

  handleChangeInput = (e) => {
    let fieldName = e.target.name;
    let value = e.target.value;
    let formValues = { ...this.state.formValues, [fieldName]: value}
    this.setState( {formValues} );
  }

  fetchData = async (e) => {
    e.preventDefault();
    let input = this.state.formValues.url;
    if(input) {
      let url = input;
      let response = await Axios.get(url);
      let results = response;
      this.setState( {...this.state, results, url: this.state.formValues.url, count: results.data.count, headers: results.headers, showData: !this.state.showData }  )
    }
  }

  render() {
    
    return (
      <>
        <Header />
        <div>
            <Form handleChangeInput={this.handleChangeInput}
                  fetchData={this.fetchData} />
            <Results visible={this.state.showData}
                     results={this.state.results} />
        </div>
        <Footer />
      </>
    );
  }

}

export default App;