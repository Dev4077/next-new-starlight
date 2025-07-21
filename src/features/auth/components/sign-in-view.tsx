'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { toast } from 'sonner';
import { loginUser } from '@/lib/api/auth';

export default function SignInViewPage() {
  const router = useRouter();
  const [email, setEmail] = useState('test@gmail.com');
  const [password, setPassword] = useState('12345678');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      const res = await loginUser({ email, password });

      if (res.status) {
        toast.success(res.message || 'Login successful');
        localStorage.setItem('token', res?.data?.accessToken);
        localStorage.setItem('refreshtoken', res?.data?.refreshToken);
        router.push('/dashboard/overview');
      } else {
        toast.error(res.message || 'Invalid credentials');
      }
    } catch (error: any) {
      toast.error(error.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className='relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0'>
      {/* Left Panel */}
      <div className='bg-muted relative hidden h-full flex-col p-10 text-white lg:flex dark:border-r'>
        <div className='absolute inset-0 bg-zinc-900' />
        <div className='relative z-20 flex items-center text-lg font-medium'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='mr-2 h-6 w-6'
          >
            <path d='M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3' />
          </svg>
          Logo
        </div>
        <div className='relative z-20 mt-auto'>
          <blockquote className='space-y-2'>
            <p className='text-lg'>
              &ldquo;This starter template has saved me countless hours of work
              and helped me deliver projects to my clients faster than ever
              before.&rdquo;
            </p>
            <footer className='text-sm'>Random Dude</footer>
          </blockquote>
        </div>
      </div>

      {/* Right Panel */}
      <div className='flex h-full items-center justify-center p-4 lg:p-8'>
        <div className='flex w-full max-w-md flex-col space-y-6'>
          <div className='text-center space-y-2'>
            <h1 className='text-2xl font-semibold tracking-tight'>Create an account</h1>
            <p className='text-sm text-muted-foreground'>
              Enter your email below to create your account
            </p>
          </div>

          <div className='space-y-4'>
            <div>
              <Label className='mb-2 block' htmlFor='email'>Email</Label>
              <Input
                id='email'
                type='email'
                placeholder='name@example.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <Label className='mb-2 block' htmlFor='password'>Password</Label>
              <Input
                id='password'
                type='password'
                placeholder='Your password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button onClick={handleLogin} disabled={loading} className='w-full'>
              {loading ? 'Signing in...' : 'Sign In with Email'}
            </Button>
          </div>

          {/* <div className='relative flex items-center justify-center'>
            <span className='bg-background px-2 text-sm text-muted-foreground'>
              OR CONTINUE WITH
            </span>
          </div> */}

          {/* <Button variant='outline' className='w-full'>
            <GitHubLogoIcon className='mr-2 h-4 w-4' />
            GitHub
          </Button> */}

          <p className='text-muted-foreground px-8 text-center text-sm'>
            By clicking continue, you agree to our{' '}
            <Link
              href='/terms'
              className='hover:text-primary underline underline-offset-4'
            >
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link
              href='/privacy'
              className='hover:text-primary underline underline-offset-4'
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
