import React from 'react';
import JSONPretty from 'react-json-prettify'
import {atelierSulphurpoolLight} from 'react-json-prettify/dist/themes';

function Results(props) {
  if(!props.visible) {
    return null;
  }

  return (
    <div>
          <p>Count:</p>
          <h2>{props.results.data.count}</h2>
          <p>Headers</p>
          <JSONPretty id="json-pretty" json={props.results.headers} theme={atelierSulphurpoolLight} />
          <p>Results</p>
          <JSONPretty id="json-pretty" json={props.results.data.results} theme={atelierSulphurpoolLight} />
        </div>
  )
}

export default Results;
