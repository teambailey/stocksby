// Pages
import Dashboard from './pages/dashboard';
import About from './pages/about';

// Routing config
const Routes = [
  {
    path: '/about',
    component: About,
    linkText: 'About',
  },
  {
    // index must be last in the array
    path: '/',
    component: Dashboard,
    linkText: 'Dashboard',
  },
];

export { Routes };
