import React from 'react'

import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ToastContainer, Flip } from 'react-toastify';

import { GlobalApp } from './GlobalApp.tsx'
import { store } from './app/store/store.ts'
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>

    <Provider store={store}>
      <BrowserRouter>
        <GlobalApp />
      </BrowserRouter>
      <ToastContainer 
        position="top-center" 
        hideProgressBar 
        theme="colored"
        autoClose={3500}
        transition={Flip}
      />
    </Provider>

  </React.StrictMode>

)
