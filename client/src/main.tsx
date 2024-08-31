import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/Home.tsx'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Error from './pages/Error.tsx'

const router = createBrowserRouter ([
  {
    path:"/",
    element: <App/>,
    errorElement: <Error/>
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
