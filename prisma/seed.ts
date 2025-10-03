import { PrismaClient } from "@/generated/prisma"

const prisma = new PrismaClient();

export const tickets = [
  {
    title: "Ticket 1",
    description: "This is the first ticket",
    status: "DONE" as const
  },
  {
    title: "Ticket 2",
    description: "This is the second ticket",
    status: "OPEN" as const
  },
  {
    title: "Ticket 3",
    description: "This is the third ticket",
    status: "IN_PROGRESS" as const
  }
]

const seed = async () => {
  const t0 = performance.now();
  console.log("DB Seed: Started ...");
  // const promises = tickets.map(ticket => prisma.ticket.create({ data: ticket }))

  // await Promise.all(promises)

  await prisma.ticket.deleteMany({})

  await prisma.ticket.createMany({
    data: tickets
  })

  const t1 = performance.now();
  console.log(`DB Seed: Finished ${t1 - t0}ms`);
}

seed();