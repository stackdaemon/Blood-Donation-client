import Home from '../pages/Home/Home'
import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import PlantDetails from '../pages/PlantDetails/PlantDetails'
import PrivateRoute from './PrivateRoute'
import DashboardLayout from '../layouts/DashboardLayout'
import AddPlant from '../pages/Dashboard/Seller/AddPlant'
import ManageUsers from '../pages/Dashboard/Admin/ManageUsers'
import Profile from '../pages/Dashboard/Common/Profile'
import Statistics from '../pages/Dashboard/Common/Statistics'
import MainLayout from '../layouts/MainLayout'
import MyInventory from '../pages/Dashboard/Seller/MyInventory'
import ManageOrders from '../pages/Dashboard/Seller/ManageOrders'
import MyOrders from '../pages/Dashboard/Customer/MyOrders'
import { createBrowserRouter } from 'react-router'
import DonationRequest from '../components/Shared/MenuLinks/DonationRequest'
import Blog from '../components/Shared/MenuLinks/Blog'
import Founding from '../components/Shared/MenuLinks/Founding'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/donation-request',
        element: <DonationRequest></DonationRequest>,
      },
      {
        path: '/blog',
        element: <Blog></Blog>,
      },
      {
        path: '/founding',
        element: <PrivateRoute>
          <Founding></Founding>
        </PrivateRoute>,
      },
      {
        path: '/plant/:id',
        element: <PlantDetails />,
      },
    ],
  },
  {
     path: '/login', 
    element: <Login /> ,
    loader: () => fetch("./Districts.json").then((res) => res.json()),
    
  
  },
  { path: '/signup', 
    element: <SignUp />,
    loader:()=>fetch('./Districts.json').then(res=>res.json())

   },
  {
    path: '/dashboard',
    element: (
      
        <DashboardLayout />
      
    ),
    children: [
      {
        index: true,
        element: (
          // <PrivateRoute>
            <Statistics />
          //</PrivateRoute> 
        ),
      },
      {
        path: 'add-plant',
        element: (
          //<PrivateRoute>
            <AddPlant />
          //</PrivateRoute>
        ),
      },
      {
        path: 'my-inventory',
        element: (
          //<PrivateRoute>
            <MyInventory />
          //PrivateRoute>
        ),
      },
      {
        path: 'manage-users',
        element: (
          //<PrivateRoute>
            <ManageUsers />
          //</PrivateRoute>
        ),
      },
      {
        path: 'profile',
        element: (
          //<PrivateRoute>
            <Profile />
//</PrivateRoute>
        ),
      },
      {
        path: 'my-orders',
        element: (
          //<PrivateRoute>
            <MyOrders />
          //</PrivateRoute>
        ),
      },
      {
        path: 'manage-orders',
        element: <ManageOrders />,
      },
    ],
  },
])
