import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import {Global, css} from '@emotion/react'

import {Root} from './components/root.jsx'
import {HomePage} from './pages/home.jsx'

const globalStyle = css`
  body {
    font-family: Arial, Helvitetica, sans-serif;
    margin: 0;
    background-color: #5c5c5c;
    color: white;
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
      {index: true, element: <HomePage />}
    ]
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Global styles={globalStyle}/>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

