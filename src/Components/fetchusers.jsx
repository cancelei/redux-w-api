import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from '../redux/users/usersSlice';

const FetchUsers = () => {
  const dispatch = useDispatch();
  const { users, isLoading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.first_name} {user.last_name}
        </li>
      ))}
    </ul>
  );
}

export default FetchUsers;
