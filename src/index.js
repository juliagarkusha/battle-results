// External deps
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

//Internal deps
import App from "./components/common/App";

// Local deps
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Provider store={store} >
      <App />
    </Provider>
  </HashRouter>
);
