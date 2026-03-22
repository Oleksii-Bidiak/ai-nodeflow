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
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 tracking-tight">Users list</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};
