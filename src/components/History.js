import React from 'react';

class History extends React.Component {
  render() {
    return (
      <aside>
        {this.props.history.map( (entry) =>
          <div className="history" key={entry.url} onClick={() => this.props.transfer(entry)}>
            <span className="method">{entry.method}</span>
            <span className="url">{entry.url}</span>
          </div>
        )}
      </aside>
    );
  }
}

export default History;
