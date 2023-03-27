import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider,  } from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools';
import { AuthProvider } from './Contex/AuthContext';

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
    <App />
    </AuthProvider>
    <ReactQueryDevtools initialIsOpen />
  </QueryClientProvider>
  </BrowserRouter>
);
