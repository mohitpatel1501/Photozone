import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App, { Buttons } from './App';
import reportWebVitals from './reportWebVitals';
import Alertmsg, { Erroralert, Warningalert } from './Msg';
import { Stack } from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Buttons />
    <br/><br/>
    <Stack sx={{ width: '100%' }} spacing={2}>
    <Alertmsg />
    <Warningalert />
    <Erroralert />
    </Stack>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
