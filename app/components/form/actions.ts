'use server';

import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { signUpSchema } from '@/lib/schema';
import { getServerSession } from 'next-auth';
import { signIn } from 'next-auth/react';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createUser(formData: FormData) {
  const { username, email, password, confirm } = Object.fromEntries(
    formData.entries()
  );

  const { error }: any = signUpSchema.safeParse({
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

export async function addAmiibo(formData: FormData) {
  const { amiiboSeries, character, gameSeries, image, name, type, head, tail } =
    Object.fromEntries(formData.entries());
  const session = await getServerSession(authOptions);
  const userId = Number(session.user.id);

  const response = await fetch('http://localhost:3000/api/addAmiibo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      amiiboSeries: amiiboSeries,
      character: character,
      gameSeries: gameSeries,
      image: image,
      name: name,
      type: type,
      head: head,
      tail: tail,
      ownerId: userId,
    }),
  });

  revalidatePath('/SearchAmiibo');
  if (response.ok) {
    redirect('/');
  } else {
    console.error('Something went wrong: ' + response.statusText);
  }
}

export async function removeAmiibo(formData: FormData) {
  const { head, tail } = Object.fromEntries(formData.entries());

  const response = await fetch('http://localhost:3000/api/removeAmiibo', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      head: head,
      tail: tail,
    }),
  });

  revalidatePath('/');
  if (response.ok) {
    console.log('amiibo removed');
  } else {
    console.error('Something went wrong: ' + response.statusText);
  }
}
