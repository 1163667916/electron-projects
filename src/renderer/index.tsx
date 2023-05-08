import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import App from './App';
import 'antd/dist/reset.css';
import './App.scss';

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(
  // <React.StrictMode>
  <RouterProvider router={App} />
  // </React.StrictMode>
);

// calling IPC exposed from preload script
window.electron.ipcRenderer.once('ipc-example', (arg) => {
  // eslint-disable-next-line no-console
  console.log(arg);
});
window.electron.ipcRenderer.sendMessage('ipc-example', ['ping']);
