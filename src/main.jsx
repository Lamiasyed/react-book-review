// import React from 'react'
// import ReactDOM from 'react-dom/client'

// import './index.css'
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>Hello world!</div>,
//   },
// ]);
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//      <RouterProvider router={router} />
//   </React.StrictMode>,
// )




import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx';
import Banner from './Banner.jsx';
import Books from './CardComponent/Books.jsx';
import Booklist from './Component/Booklist.jsx';
import Home from './Component/Home.jsx';
import Readpage from './Component/Readpage.jsx';
import Details from './Details/Details.jsx';
import './index.css';


const router=createBrowserRouter([
  {
    path:"/",
    element:<App></App>,
  //  errorElement:<Error></Error>,
    children:[
      {
        path:"/",
        element:<Home></Home>

      },
      {
        path:"/",
        element:<Banner></Banner>
      },
      {
        path:"/book",
        element:<Booklist></Booklist>,
        loader:()=>fetch("data.json")
      },
      {
        path:"/books",
        element:<Books></Books>

      },
      {
        path:"/detail/:id",
        element:<Details />,
        loader:()=>fetch("data.json")

      },
      {
        path:"/read",
        element:<Readpage></Readpage>
      }
    ]
    
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
     
    </RouterProvider>
  </React.StrictMode>,
)
