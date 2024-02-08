import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Menu from './components/menu/Menu'
import Navbar from './components/navbar/Navbar'
import './styles/global.scss'
import Footer from './components/footer/Footer'
import Home from './pages/Home/Home'
import Product from './pages/products/Product'
import Login from './pages/login/Login'

function App() {
  
  const Layout =()=>{
    return(
      <div className="main">
        <Navbar/>
        <div className="container">
          <div className="menucontainer">
              <Menu/>
          </div>
          <div className="contentcontainer">
            <Outlet/>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/products",
          element:<Product/>
        },
      ]
    },
    {
      path:"login",
      element:<Login/>
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
