import prisma from '@/lib/db';
import * as bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

interface RequestBody {
  name: string;
  email: string;
  password: string;
}

export async function POST(request: Request) {
  try {
    const body: RequestBody = await request.json();
    const { name, email, password } = body;

    const existingUserByEmail = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (existingUserByEmail) {
      return NextResponse.json(
        {
          user: null,
          message: 'User with that email already exists',
        },
        { status: 409, statusText: 'User with that email already exists' }
      );
    }

    const existingUserByName = await prisma.user.findUnique({
      where: {
        name: name,
      },
    });

    if (existingUserByName) {
      return NextResponse.json(
        {
          user: null,
          message: 'That username already exists',
        },
        { status: 409 }
      );
    }

    const user = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: await bcrypt.hash(password, 10),
      },
    });

    const { password: newUserPassword, ...result } = user;

    return NextResponse.json(
      { result, message: 'User Created succesfully' },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error, message: 'Something went wrong' },
      { status: 500 }
    );
  }
}
