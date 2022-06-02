import React from 'react';
import ReactDOM from 'react-dom/client';

import {GlobalStyles} from './styled/global-styled';
import {AppPage} from './compontents/app-page';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.Fragment>
    <GlobalStyles/>
    <AppPage/>
  </React.Fragment>
);

