import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

const FetchUsers = () => {
  const { users, isLoading, error } = useSelector((state) => state.users);

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

FetchUsers.propTypes = {
  users: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string
}

export default FetchUsers;
