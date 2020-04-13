// Pages
import Home from './pages/home';
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
    component: Home,
    linkText: 'Home',
  },
];

export { Routes };
