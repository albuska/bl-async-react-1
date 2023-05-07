import { Route, Routes } from 'react-router-dom';
import Layout from 'components/layout/Layout';
import HomePage from 'pages/HomePage';
import UsersPage from 'pages/UsersPage';
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="users" element={<UsersPage />} />
      </Route>
    </Routes>
  );
};
