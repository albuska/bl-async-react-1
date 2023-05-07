import css from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? css.active : css.headerLink
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="users">Users</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
