import Link from "next/link";
import React from "react";
import { HiOutlinePencil } from "react-icons/hi";
import { IoCheckmark, IoDocumentOutline } from "react-icons/io5";
import { Heading } from "@/components/heading";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { initialTickets } from "@/data";
import { ticketPath } from "@/utils/paths";

const TICKET_ICONS = {
  DONE: <IoCheckmark />,
  OPEN: <IoDocumentOutline />,
  IN_PROGRESS: <HiOutlinePencil />,
};

const TicketsPage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading
        title="Tickets Page"
        description="All your tickets at one place"
      />

      <div className="flex-1 flex flex-col items-center gap-y-4 animate-fade-in-from-top">
        {initialTickets.map((ticket) => (
          <Card key={ticket.id} className="w-full max-w-[420px]">
            <CardHeader>
              <CardTitle className="flex gap-x-2">
                <span>{TICKET_ICONS[ticket.status]}</span>
                <span className="truncate">{ticket.title}</span>
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="line-clamp-3 whitespace-break-spaces">
                {ticket.description}
              </p>
            </CardContent>

            <CardFooter>
              <Link href={ticketPath(ticket.id)} className="text-sm underline">
                View
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TicketsPage;
