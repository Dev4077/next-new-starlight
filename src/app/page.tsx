'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.replace('/auth/sign-in'); // or '/login'
    } else {
      router.replace('/dashboard/overview');
    }
  }, []);

  return null;
}
