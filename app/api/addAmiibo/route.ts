import prisma from '@/lib/db';
import { NextResponse } from 'next/server';

interface RequestBody {
  amiiboSeries: string;
  character: string;
  gameSeries: string;
  image: string;
  name: string;
  type: string;
  head: string;
  tail: string;
  ownerId: number;
}

export async function POST(request: Request) {
  try {
    const body: RequestBody = await request.json();
    const {
      amiiboSeries,
      character,
      gameSeries,
      image,
      name,
      ownerId,
      type,
      head,
      tail,
    } = body;

    const isStored = await prisma.amiibo.findFirst({
      where: {
        head: head,
        tail: tail,
      },
    });

    if (isStored) {
      return NextResponse.json(
        {
          userAmiibo: null,
          message: 'That amiibo is already on the shelf',
        },
        { status: 409, statusText: 'That amiibo is already on the shelf' }
      );
    }

    const userAmiibo = await prisma.amiibo.create({
      data: {
        amiiboSeries: amiiboSeries,
        character: character,
        gameSeries: gameSeries,
        image: image,
        name: name,
        ownerId: ownerId,
        type: type,
        head: head,
        tail: tail,
      },
    });

    return NextResponse.json(
      { userAmiibo, message: 'Amiibo added Succesfully' },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { error, message: 'Something went wrong' },
      { status: 500 }
    );
  }
}
