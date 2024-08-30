import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter, Navigate} from 'react-router-dom'
import {Global, css} from '@emotion/react'

import {color_bg, color_text, color_element} from './components/colors.jsx'

import {Root} from './components/root.jsx'
import {HomePage} from './pages/home.jsx'
import {Gallery} from './pages/gallery.jsx'

import home_additions from "./data/home_additions.json";
import kitchens_bathrooms from "./data/bathrooms_kitchens.json";
import decks_patios from "./data/decks_patios.json";

const globalStyle = css`
  html, body {
    height: 100%;
    width: 100%;
    font-family: "Moderustic", Arial, sans-serif;
    margin: 0;
    /* background-color: #5c5c5c; */
    /* color: white; */
    /* overflow-x: hidden; */
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
      // Pages
      {path: "gallery/additions", element: <Gallery title="Home Additions" photos={home_additions} />},
      {path: "gallery/kitchens-bathrooms", element: <Gallery title="Kitchens and Bathrooms" photos={kitchens_bathrooms} />},
      {path: "gallery/decks-patios", element: <Gallery title="Decks and Patios" photos={decks_patios} />},
      // Redirects
      {path: "home", element: <Navigate to="/#home" />},
      {path: "work", element: <Navigate to="/#work" />},
      {path: "team", element: <Navigate to="/#team" />},
      {path: "contact", element: <Navigate to="/#contact" />},
      {path: "gallery", element: <Navigate to="/#work" />},
      {path: "gallery/kitchens", element: <Navigate to="/gallery/kitchens-bathrooms" />},
      {path: "gallery/bathrooms", element: <Navigate to="/gallery/kitchens-bathrooms" />},
      {path: "gallery/decks", element: <Navigate to="/gallery/decks-patios" />},
      {path: "gallery/patios", element: <Navigate to="/gallery/decks-patios" />},
    ]
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Global styles={globalStyle}/>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

