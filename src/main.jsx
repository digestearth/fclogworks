import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import {Global, css} from '@emotion/react'

import {color_bg, color_text, color_element} from './components/colors.jsx'

import {Root} from './components/root.jsx'
import {HomePage} from './pages/home.jsx'
import { CarouselTest } from './pages/carouseltest.jsx'

const globalStyle = css`
  html, body {
    height: 100%;
    width: 100%;
    font-family: "Moderustic", Arial, sans-serif;
    margin: 0;
    /* background-color: #5c5c5c; */
    /* color: white; */
    overflow-x: hidden;
    background-color: ${color_bg};
    color: ${color_text};
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

