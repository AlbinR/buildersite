import React, {Fragment} from 'react';
import GlobalStyle from './globalStyles';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Fragment>
      <GlobalStyle/>
      <App />
    </Fragment>
  </React.StrictMode>
);
