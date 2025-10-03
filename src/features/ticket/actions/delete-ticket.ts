"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { ticketsPath } from "@/utils/paths";

export const deleteTicket = async (id: string) => {
  await prisma.ticket.delete({
    where: { id },
  });

  revalidatePath(ticketsPath)
  redirect(ticketsPath)
};