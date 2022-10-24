/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'; 
import Image from 'next/Image';
import { useAuthState } from 'react-firebase-hooks/auth';

// utils
import { auth } from '../utils/firebase';

function Nav() {
  const [user, loading] = useAuthState(auth);

  return (
    <nav className='flex justify-between items-center py-10'>
      <Link href="/">
        <button className='text-lg font-medium'>Create Minds</button>
      </Link>

      <ul className='flex- items-center gap-10'>
        {!user ? (
          <Link href={"/auth/login"}>
            <a className='py-2 px-4 text-sm bg-cyan-500 text-white rounded-lg font-medium ml-8'>Join Now</a>
          </Link>
        ) : (
          <div className='flex items-center gap-6'>
            <Link href="/post">
              <button className='font-medium bg-cyan-500 text-white py-2 px-4 rounded-md text-sm'>Post</button>
            </Link>
            <Link href="/dashboard">
              <img
                className="w-12 rounded-full cursor-pointer"
                src={user.photoURL}
                alt=""
              />
            </Link>
          </div>
        )}
      </ul>
    </nav>
  )
} 

export default Nav