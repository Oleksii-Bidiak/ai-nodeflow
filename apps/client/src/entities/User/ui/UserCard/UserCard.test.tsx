import { UserCard } from './UserCard';
import { render, screen } from '@testing-library/react';

describe('UserCard component', () => {
  const mockUser = {
    id: '1',
    email: 'test@ai-nodeflow.com',
    name: 'Oleksii',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  test('renders users name amd email correctly', () => {
    render(<UserCard user={mockUser} />);

    expect(screen.getByText('Oleksii')).toBeInTheDocument();
    expect(screen.getByText('test@ai-nodeflow.com')).toBeInTheDocument();
  });

  test('renders "Without a name", if name is null', () => {
    const userWithoutName = { ...mockUser, name: null };

    render(<UserCard user={userWithoutName} />);

    expect(screen.getByText('Without a name')).toBeInTheDocument();
  });
});
