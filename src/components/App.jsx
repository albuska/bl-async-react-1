import { Route, Routes } from 'react-router-dom';
import Layout from 'components/layout/Layout';
import HomePage from 'pages/HomePage';
import UsersPage from 'pages/UsersPage';
import UserDetailsPage from '../pages/UserDetailsPage'; 
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="users/:id" element={ <UserDetailsPage/>} />
      </Route>
    </Routes>
  );
};
