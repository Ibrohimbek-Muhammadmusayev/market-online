import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/home"
import Layout from "./layout/layout"
import SillerLayout from "./layout/siller-layout"
import UserLayout from "./layout/user-layout"
import SellerDashboard from "./admins/seller-dashboard"
import UserDashboard from "./admins/user-dashboard"
import Login from "./pages/login"
import Signup from "./pages/signup"
import About from "./pages/about"
import Contact from "./pages/contact"
import Notfound from "./pages/not-found"
import Detailes from "./pages/datailes"

function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/about",
          element: <About/>
        },
        {
          path: "/contact",
          element: <Contact/>
        },
        {
          path: "/login",
          element: <Login/>
        },
        {
          path: "/signup",
          element: <Signup/>
        },
        {
          path: "/:id",
          element: <Detailes/>
        },
        {
          path: "*",
          element: <Notfound/>
        },
      ]
    },
    {
      path: "/siller-dashboard",
      element: <SillerLayout/>,
      children: [
        {
          path: "/siller-dashboard/",
          element: <SellerDashboard/>
        },
        {
          path: "/siller-dashboard/add-product",
          element: <div>add-product</div>
        },
        {
          path: "/siller-dashboard/sold",
          element: <div>sold product</div>
        },
        {
          path: "/siller-dashboard/all-products",
          element: <div>all-product</div>
        },
        {
          path: "/siller-dashboard/product-prices",
          element: <div>product-prices</div>
        },
        {
          path: "*",
          element: <Notfound/>
        },
      ]
    },
    {
      path: "/user-dashboard",
      element: <UserLayout/>,
      children: [
        {
          path: "/user-dashboard/",
          element: <UserDashboard/>
        },
        {
          path: "/user-dashboard/cart",
          element: <div>cart</div>
        },
        {
          path: "/user-dashboard/like",
          element: <div>Like</div>
        },
        {
          path: "*",
          element: <Notfound/>
        },
      ]
    },
    {
      path: "*",
      element: <Notfound/>,
    },
  ])

  return <RouterProvider router={router}/>
}

export default App
