import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App2";
import * as serviceWorker from "./serviceWorker";

//imports we've added
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { BrowserRouter as Router } from "react-router-dom";

//importing variables we've created
import { rootReducer } from "./reducers/reducers";

const rootElement = document.getElementById("root");
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  rootElement
);

serviceWorker.unregister();
