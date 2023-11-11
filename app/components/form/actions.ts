'use server';

import { signUpSchema } from '@/lib/schema';
import { signIn } from 'next-auth/react';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createUser(formData: FormData) {
  const { username, email, password, confirm } = Object.fromEntries(
    formData.entries()
  );

  const { error } = signUpSchema.safeParse({
    username,
    email,
    password,
    confirm,
  });
  if (error) {
    return { error: error.format() };
  }

  const response = await fetch('http://localhost:3000/api/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: username,
      email: email,
      password: password,
    }),
  });

  revalidatePath('/SignUp');

  if (response.ok) {
    redirect('/');
  } else {
    console.error('User Registration failed: ' + response.statusText);
  }
}
