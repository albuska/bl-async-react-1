import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUsers } from "redux/users/usersOperations";
import { selectItems } from "redux/users/usersSelectors";

const UsersPage = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectItems);
 
  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  return (
    <div>
      <ul>
        {users.map(({id, name}) => (
            <li key={id}>
            <Link to={id}>{ name}</Link>
          </li>
        ))}
      </ul>
      <Link to='add'>Add user</Link>
    </div>
  );
};
export default UsersPage;
