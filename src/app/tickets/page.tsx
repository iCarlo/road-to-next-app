import Link from "next/link";
import React from "react";
import { initialTickets } from "@/data";
import { ticketPath } from "@/utils/paths";

const TicketsPage = () => {
  return (
    <div>
      <h1>Tickets Page</h1>

      {initialTickets.map((ticket) => (
        <div key={ticket.id} className="flex gap-1">
          <h4 className="font-bold">{ticket.title}</h4>
          <Link href={ticketPath(ticket.id)}>View</Link>
        </div>
      ))}
    </div>
  );
};

export default TicketsPage;
