import Link from "next/link";
import React from "react";
import { HiOutlinePencil } from "react-icons/hi";
import { IoCheckmark, IoDocumentOutline } from "react-icons/io5";
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
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Tickets Page</h1>
        <p className="text-sm text-muted-foreground">
          All your tickets at one place
        </p>
      </div>

      <div className="flex-1 flex flex-col items-center gap-y-4 animate-fade-in-from-top">
        {initialTickets.map((ticket) => (
          <div
            key={ticket.id}
            className="w-full max-w-[420px] p-4 border border-slate-500 rounded"
          >
            <span className="text-md font-semibold">
              {TICKET_ICONS[ticket.status]}
            </span>
            <h3 className="text-lg font-semibold truncate">{ticket.title}</h3>
            <p className="text-sm text-slate-500 truncate mb-4">
              {ticket.description}
            </p>
            <Link href={ticketPath(ticket.id)} className="text-sm underline">
              View
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicketsPage;
