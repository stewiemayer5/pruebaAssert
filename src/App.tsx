import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ReactView } from './React View/ReactView';
import 'bootstrap/dist/css/bootstrap.min.css';
import { JqToReact } from './JqueryReact/JqToReact';

function App() {

  return (
    <div className="container p-4">
      <ReactView />
      <JqToReact />
    </div>
  );
}

export default App;
