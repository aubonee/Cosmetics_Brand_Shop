import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './components/Route/Route'
import {RouterProvider} from "react-router-dom";

import './index.css'
import AuthProvider from './providers/AuthProvider';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  
</React.StrictMode>
)
