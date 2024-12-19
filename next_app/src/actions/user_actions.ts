"use server";

import prisma from "@/lib/db";

export default async function createUserIfNoExists({
  data,
}: {
  data: { name: string | null | undefined; email: string | null | undefined };
}): Promise<boolean> {
  if (!data.name || !data.email) {
    return false;
  }
  const user = await prisma.user.findUnique({
    where: { email: data.email },
    select: { id: true },
  });
  if (!user) {
    const newUser = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
      },
    });
  }
  return true;
}
