import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/style.scss';

export default class App extends React.Component {
  render() {
    return(
      <div>
        <h1>COS React Boilerplate</h1>
        <img src="/images/dsa-logo.png" alt="DSA Logo"/>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));