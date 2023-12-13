import prisma from '@/lib/db';
import * as bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

interface RequestBody {
  name: string;
  password: string;
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json();

  const user = await prisma.user.findFirst({
    where: {
      email: body.name,
    },
  });

  if (user && (await bcrypt.compare(body.password, user.password))) {
    const { password, ...userWithoutPass } = user;

    return new Response(JSON.stringify(userWithoutPass));

    //   return NextResponse.json(
    //     { userWithoutPass, message: 'Login succesful' },
    //     { status: 201 }
    //   );
    // } else {
    //   return new Response(JSON.stringify(null));
  } else {
    return new Response(JSON.stringify(null));
  }
}
