import { useDispatch } from 'react-redux';
import { fetchAddUser } from 'redux/users/usersOperations';
import { useNavigate } from 'react-router-dom';

export const AddUsersPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

  const onHandleSubmit = async event => {
    event.preventDefault();
    const newUser = {
      name: event.target.elements.name.value,
      email: event.target.elements.email.value,
      address: event.target.elements.address.value,
      tel: event.target.elements.tel.value,
      avatar: event.target.elements.avatar.value,
      };
      
      const user = await dispatch(fetchAddUser(newUser)).unwrap();
      navigate(`/users/${user.id}`);
  };
  return (
    <div>
      <form onSubmit={onHandleSubmit}>
        <label>
          Name
          <input type="text" name="name" />
        </label>
        <label>
          Email
          <input type="email" name="email" />
        </label>
        <label>
          Address
          <input type="text" name="address" />
        </label>
        <label>
          Tel
          <input type="number" name="tel" />
        </label>
        <label>
          Avatar
          <input type="url" name="avatar" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
