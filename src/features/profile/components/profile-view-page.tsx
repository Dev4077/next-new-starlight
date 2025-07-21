'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export default function ProfileViewPage() {
  return (
    <div className='w-full max-w-4xl p-6'>
      <h1 className='text-2xl font-semibold mb-6'>User Profile</h1>

      {/* Personal Info */}
      <div className='space-y-4'>
        <h2 className='text-lg font-medium'>Personal Information</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div>
            <Label htmlFor='firstName' className='mb-2 block'>
              First Name
            </Label>
            <Input id='firstName' placeholder='John' />
          </div>
          <div>
            <Label htmlFor='lastName' className='mb-2 block'>
              Last Name
            </Label>
            <Input id='lastName' placeholder='Doe' />
          </div>
          <div>
            <Label htmlFor='email' className='mb-2 block'>
              Email
            </Label>
            <Input id='email' type='email' placeholder='john@example.com' />
          </div>
          <div>
            <Label htmlFor='phone' className='mb-2 block'>
              Phone
            </Label>
            <Input id='phone' type='tel' placeholder='+1 555 123 4567' />
          </div>
        </div>
      </div>

      <Separator className='my-8' />

      {/* Password */}
      <div className='space-y-4'>
        <h2 className='text-lg font-medium'>Change Password</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div>
            <Label htmlFor='currentPassword' className='mb-2 block'>
              Current Password
            </Label>
            <Input id='currentPassword' type='password' />
          </div>
          <div>
            <Label htmlFor='newPassword' className='mb-2 block'>
              New Password
            </Label>
            <Input id='newPassword' type='password' />
          </div>
        </div>
      </div>

      <div className='flex justify-end mt-6'>
        <Button type='submit'>Save Changes</Button>
      </div>
    </div>
  );
}
