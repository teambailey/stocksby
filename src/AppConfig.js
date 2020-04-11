// Pages
import Home from './pages/home';
import About from './pages/about';

// Routing config
const Routes = [
  {
    path: '/about',
    file: About,
    linkText: 'About',
  },
  {
    // index must be last in the array
    path: '/',
    file: Home,
    linkText: 'Home',
  },
];

export default Routes;
