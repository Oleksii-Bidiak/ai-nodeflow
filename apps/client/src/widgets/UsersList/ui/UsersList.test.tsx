import * as api from '@/shared/api/generated';
import { render, screen } from '@testing-library/react';
import { UsersList } from './UsersList';

jest.mock('@/shared/api/generated');
const mockUseUsersQuery = api.useUsersControllerFindAllQuery as jest.Mock;

describe('UsersList Widget', () => {
  test('renders loading state initially', () => {
    mockUseUsersQuery.mockReturnValue({ isLoading: true, data: undefined });

    render(<UsersList />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('renders list of users on success', () => {
    mockUseUsersQuery.mockReturnValue({
      isLoading: false,
      data: [
        { id: '1', email: 'test1@ai-nodeflow.com', name: 'User 1' },
        { id: '2', email: 'test2@ai-nodeflow.com', name: null },
      ],
    });

    render(<UsersList />);

    expect(screen.getByText('User 1')).toBeInTheDocument();
    expect(screen.getByText('test2@ai-nodeflow.com')).toBeInTheDocument();
  });

  test('renders error state', () => {
    mockUseUsersQuery.mockReturnValue({ isLoading: false, error: true });

    render(<UsersList />);

    expect(
      screen.getByText('An error occurred while loading'),
    ).toBeInTheDocument();
  });
});
