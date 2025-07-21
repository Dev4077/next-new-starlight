'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      router.replace('/auth/sign-in');
    } else {
      router.replace('/dashboard/overview');
    }
  }, []);

  return null;
}
