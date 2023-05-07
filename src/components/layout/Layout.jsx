import Navigation from 'components/navigation/Navigation';
import { Outlet } from 'react-router-dom';
const Layout = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default Layout;
