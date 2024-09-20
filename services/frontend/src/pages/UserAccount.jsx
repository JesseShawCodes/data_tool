import { React } from 'react';
import useUser from '../hooks/useUser';

export default function UserAccount() {
  const { user } = useUser();

  console.log(user);

  if (useUser().isLoading) {
    return null;
  }

  return (
    <div className="login_page container form">
      <h1>User Profile</h1>
      <div>
        <strong>Email: </strong>
        {user.email}
      </div>
    </div>
  );
}
