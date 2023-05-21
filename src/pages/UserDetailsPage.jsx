import { Modal } from 'components/modal/Modal';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchOneUser } from 'redux/users/usersOperations';
import { selectOneUser } from 'redux/users/usersSelectors';

const UserDetailsPage = () => {
  const [userId, setUserId] = useState('');
  const { id } = useParams();
  const user = useSelector(selectOneUser);
  console.log(user);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOneUser(id));
  }, [dispatch, id]);

  const openModal = id => {
    setUserId(id);
  };
  const closeModal = () => {
    setUserId('');
  };

  return (
    <div>
      {user && (
        <>
          <img src={user.avatar} alt={user.name} />
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.address}</p>
          <p>{user.tel}</p>
        </>
      )}
      <button onClick={() => openModal(id)}>Delete</button>
      <Link to="edit">Edit user</Link>
      {userId && <Modal id={userId} closeModal={closeModal} />}
    </div>
  );
};

export default UserDetailsPage;
