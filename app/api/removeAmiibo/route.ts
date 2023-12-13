import prisma from '@/lib/db';
import { NextResponse } from 'next/server';

interface RequestBody {
  head: string;
  tail: string;
}

export async function DELETE(request: Request) {
  try {
    const body: RequestBody = await request.json();
    const { head, tail } = body;

    const removedAmiibo = await prisma.amiibo.deleteMany({
      where: {
        head: head,
        tail: tail,
      },
    });

    return NextResponse.json(
      { removedAmiibo, message: 'Amiibo removed succesfully' },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error, message: 'Something went wrong' },
      { status: 500 }
    );
  }
}
