import React from 'react'
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from 'styled-components';

import { theme } from './configs/theme';
import { Routes } from './routes/index';
import { GlobalStyles } from './styles/global';
import { AuthContext } from './hooks/auth';

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <ThemeProvider theme={theme}>
         <GlobalStyles />
         <AuthContext.Provider value={{}}>
            <Routes />
         </AuthContext.Provider>
      </ThemeProvider>
   </React.StrictMode>
)
