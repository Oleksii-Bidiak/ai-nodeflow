import { UserEntity } from '@/shared/api/generated';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/components/ui/card';

interface UserCardProps {
  user: UserEntity;
}

export const UserCard = ({ user }: UserCardProps) => {
  const { email, name, createdAt } = user;
  const userName = name || 'Without a name';

  const formattedDate = new Date(createdAt).toLocaleDateString('uk-UA', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <Card className="w-87.5 shadow-sm hover:shadow-md transition-shadow">
      <CardHeader>
        <CardTitle className="text-xl">{userName}</CardTitle>
        <CardDescription>{email}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Registered: {formattedDate}
        </p>
      </CardContent>
    </Card>
  );
};
