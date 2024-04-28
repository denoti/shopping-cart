import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from '../components/Home';
import Cart from '../components/Cart';
import Shop from '../components/Shop';
import ErrorPage from '../components/ErrorPage';
import CartContextProvider from '../context/Context';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/cart',
      element: <Cart />,
    },
    {
      path: '/shop',
      element: <Shop />,
    },
  ]);
  return (
    <CartContextProvider>
      <RouterProvider router={router} />;
    </CartContextProvider>
  );
};

export default Router;
