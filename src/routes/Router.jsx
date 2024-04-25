import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../components/Home';
import Cart from '../components/Cart';
import Shop from '../components/Shop';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '/home',
          element: <Home />,
        },
        {
          path: '/cart',
          element: <Cart />,
        },
        {
          path: '/shop',
          element: <Shop />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
