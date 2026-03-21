import { UserEntity } from '@/shared/api/generated';

interface UserCardProps {
  user: UserEntity;
}

export const UserCard = ({ user }: UserCardProps) => {
  const { email, name } = user;
  const userName = name || 'Without a name';

  return (
    <div
      style={{
        border: '1px solid gray',
        padding: '10px',
        margin: '10px',
      }}>
      <h3>{userName}</h3>
      <p>{email}</p>
    </div>
  );
};
