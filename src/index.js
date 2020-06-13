import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App';
import 'tachyons';
import * as serviceWorker from './serviceWorker';
import { robots } from './robots';


ReactDOM.render(
     <App />,
  document.getElementById('root')
);


serviceWorker.unregister();
