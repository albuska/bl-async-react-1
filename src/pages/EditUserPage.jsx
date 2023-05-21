import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchEditUser, fetchOneUser } from 'redux/users/usersOperations';
import { selectOneUser } from 'redux/users/usersSelectors';
import { useNavigate } from 'react-router-dom';

export const EditUserPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const user = useSelector(selectOneUser);
  const navigate = useNavigate();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [address, setAddress] = useState(user.address);
  const [tel, setTel] = useState(user.tel);
  const [avatar, setAvatar] = useState(user.avatar);

  useEffect(() => {
    dispatch(fetchOneUser(id));
  }, [dispatch, id]);

  const handleSubmit = event => {
    event.preventDefault();
    const user = {
      name,
      email,
      address,
      tel,
      avatar,
      id,
    };
    console.log(user);
    dispatch(fetchEditUser(user));
    navigate(`/users/${id}`);
  };

  const handleChange = event => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;
      case 'email':
        setEmail(event.target.value);
        break;
      case 'address':
        setAddress(event.target.value);
        break;
      case 'tel':
        setTel(event.target.value);
        break;
      case 'avatar':
        setAvatar(event.target.value);
        break;
      default:
        return;
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label>
          Address
          <input
            type="text"
            name="address"
            value={address}
            onChange={handleChange}
          />
        </label>
        <label>
          Tel
          <input type="number" name="tel" value={tel} onChange={handleChange} />
        </label>
        <label>
          Avatar
          <input
            type="url"
            name="avatar"
            value={avatar}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
