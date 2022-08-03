import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { RatingContextProvider } from './context/ratingContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RatingContextProvider>
      <App />
    </RatingContextProvider>
  </React.StrictMode>
)
