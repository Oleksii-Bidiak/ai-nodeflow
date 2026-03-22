'use client';

import { UsersList } from '@/widgets/UsersList';

export default function Home() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Ai NodeFlow - Controll panel</h1>
      <UsersList />
    </main>
  );
}
