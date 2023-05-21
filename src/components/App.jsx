import { Route, Routes } from 'react-router-dom';
import Layout from 'components/layout/Layout';
import HomePage from 'pages/HomePage';
import UsersPage from 'pages/UsersPage';
import UserDetailsPage from '../pages/UserDetailsPage';
import { AddUsersPage } from 'pages/AddUsersPage';
import { EditUserPage } from 'pages/EditUserPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="users/:id" element={<UserDetailsPage />} />
        <Route path="users/add" element={<AddUsersPage />} />
        <Route path="users/:id/edit" element={<EditUserPage />} />
      </Route>
    </Routes>
  );
};
