import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import {Global, css} from '@emotion/react'

import {Root} from './components/root.jsx'
import {HomePage} from './pages/home.jsx'
import { CarouselTest } from './pages/carouseltest.jsx'

const globalStyle = css`
  html, body {
    height: 100%;
    width: 100%;
    font-family: "Moderustic", Arial, sans-serif;
    margin: 0;
    background-color: #5c5c5c;
    color: white;
    /* background-color: #eeede9; */
  }
`

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: (
      <Root>
        <h1>404 Not Found</h1>
      </Root>
    ),
    children: [
      {index: true, element: <HomePage />},
      {
        path: "carousel",
        element: <CarouselTest />
      }
    ]
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Global styles={globalStyle}/>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

