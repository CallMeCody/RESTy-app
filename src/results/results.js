import React from 'react';
import JSONPretty from 'react-json-prettify'
import {atelierSulphurpoolLight} from 'react-json-prettify/dist/themes';

class Results extends React.Component {
  render() {  
    return (
      <>
      <h2>Count</h2>
      {/* <JSONPretty id="json-pretty" json={this.props.results.data.count} theme={atelierSulphurpoolLight} /> */}
      <h2>Headers</h2>
      <JSONPretty id="json-pretty" json={this.props.results.headers} theme={atelierSulphurpoolLight} />
      <h2>Results</h2>
      <JSONPretty id="json-pretty" json={this.props.results.data} theme={atelierSulphurpoolLight} />
      </>
    )
  }
}

export default Results;
