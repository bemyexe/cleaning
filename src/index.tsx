import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import {App} from './app';

import './styles/reset.scss';
import './styles/global.scss';
import './styles/colors.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
