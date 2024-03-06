import React, { useContext } from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import SingInPage from '../modules/auth/SingInPage';
import AuthContext from '../config/context/auth-context';

const AppRouter = () => {
  const {user} = useContext(AuthContext);
  const router = createBrowserRouter(
    createRoutesFromElements(
        <>
          {
            user.signed ? (
            <>
            <Route path='/' element={<>Layout</>}>
              <Route path='admin' element={<>Administrador Home</>}/>
              <Route path='users' element={<>Usuarios</>}/>
              <Route path='products' element={<>Products</>}/>
            </Route>
            </>) : (<Route path='/' element={<SingInPage/>} />)  
          }
        <Route path='/*' element={<>404 Not Found</>}/>
      </> 
    )
  )
  return <RouterProvider router={router}/>; 
};

export default AppRouter;