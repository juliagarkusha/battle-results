import ReactDOM from 'react-dom';
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import App from "./components/common/App";

import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
    <HashRouter>
        <Provider store={store}>
        <App />
        </Provider>
    </HashRouter>
);
