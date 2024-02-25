import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';

import Home from '../pages/Home';
import Shop from '../pages/Shop';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/shop',
        element: <Shop />,
      },
    ],
  },
]);

export default router;
