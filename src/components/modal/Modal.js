import { useDispatch } from 'react-redux';
import { fetchDeleteUser } from 'redux/users/usersOperations';
import { useNavigate } from 'react-router-dom';

export const Modal = ({ id, closeModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = () => {
    dispatch(fetchDeleteUser(id));
    navigate('/users');
  };

  return (
    <div>
      <p>Are you sure?</p>
      <button onClick={handleDelete}>Yes</button>
      <button onClick={closeModal}>No</button>
    </div>
  );
};
