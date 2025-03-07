// React imports
import { StrictMode } from 'react'
// Third party imports
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
// App imports
import './index.css'
import App from './App.tsx'
import { CartProvider } from './store/CartContext.tsx';

createRoot(document.getElementById('root')!).render(

  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
  </StrictMode>,
)
