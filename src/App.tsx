import './App.css'
import { useEffect, useState } from 'react';
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import router from './routes/index';
import Router from './routes/index';
import { useTheme } from 'styled-components';

function App() {

  return (
    <>
      <BrowserRouter >
        <Router />
      </BrowserRouter>
    </>
  )
}

export default App
