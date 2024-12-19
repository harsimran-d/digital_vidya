"use server";
import prisma from "@/lib/db";
import { Prisma } from "@prisma/client";
import bcrypt from "bcrypt";

export default async function createUser({
  data,
}: {
  data: { username: string; name: string | undefined; password: string };
}): Promise<{ id: string; error: string }> {
  const hashedPassword = bcrypt.hashSync(data.password, 10);
  try {
    const user = await prisma.user.create({
      data: {
        username: data.username,
        name: data.name,
        hash: hashedPassword,
      },
      select: {
        id: true,
      },
    });
    return { id: user.id, error: "" };
  } catch (e) {
    if (
      e instanceof Prisma.PrismaClientKnownRequestError &&
      e.code === "P2002"
    ) {
      console.log("username already exists");
      return { id: "", error: "username already taken" };
    }
    console.log("user creation failed");
    return { id: "", error: "Something went wrong" };
  }
}
