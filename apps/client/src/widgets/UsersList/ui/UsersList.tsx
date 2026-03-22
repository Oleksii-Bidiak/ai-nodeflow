import { UserCard } from '@/entities/User';
import { useUsersControllerFindAllQuery } from '@/shared/api/generated';

export const UsersList = () => {
  const { data: users, error, isLoading } = useUsersControllerFindAllQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div style={{ color: 'red' }}>An error occurred while loading</div>;
  }

  if (!users?.length) {
    return <div>No users found</div>;
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        padding: '1rem',
      }}>
      <h2>Users list</h2>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};
