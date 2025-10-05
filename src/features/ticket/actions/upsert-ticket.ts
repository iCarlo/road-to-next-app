"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { ticketsPath } from "@/utils/paths";

export const upsertTicket = async (id: string | undefined, formData: FormData) => {
  const data = {
    title: formData.get("title") as string,
    description: formData.get("description") as string,
  };

  await prisma.ticket.upsert({
    where: {
      id: id || ""
    },
    create: data,
    update: data
  })


  revalidatePath(ticketsPath)

  if (id) {
    redirect(ticketsPath)
  }
};