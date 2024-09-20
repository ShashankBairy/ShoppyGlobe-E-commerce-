import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { lazy, Suspense } from 'react'


const Productlist = lazy(()=> import('./components/Productlist.jsx')) // used lazy function to render that component when we need that
const Productitem = lazy(()=> import('./components/Productitem.jsx'))
const Cart = lazy(()=>import('./components/Cart.jsx'))
const Error = lazy(()=>import('./components/Error.jsx'))
const Cartitem = lazy(()=> import('./components/Cartitem.jsx'))

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement:<Error/>,
    children:[
      {
         path:'/',
         element:(
         <Suspense fallback={<h1>Loading...</h1>}>
          <Productlist />
          </Suspense>),
        errorElement:<Error/>,
      },
      {
        path:'/products/:id',
        element:(
          <Suspense fallback={<h1>Loading...</h1>}>
          <Productitem />
          </Suspense>
        ),
        errorElement:<Error/>,
      },
      {
        path:'/cart',
        element:(<Suspense fallback={<h1>Loading...</h1>}>
          <Cart/>
       </Suspense>),
        errorElement:<Error/>,
      },
      {
        path:'/cartitem',
        element:
         (<Suspense fallback={<h1>Loading...</h1>}>
          <Cartitem/>
       </Suspense>),
       errorElement:<Error/>,
      },
    ]
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter}/>
  </StrictMode>,
)
