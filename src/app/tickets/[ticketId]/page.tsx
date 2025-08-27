import React from "react";
import { initialTickets } from "@/data";

const TICKET_ICONS = {
  DONE: "X",
  OPEN: "O",
  IN_PROGRESS: ">",
};

interface TicketPageProps {
  params: Promise<{
    ticketId: string;
  }>;
}

const TicketPage = async ({ params }: TicketPageProps) => {
  const { ticketId } = await params;

  const ticketDetail = initialTickets.find((ticket) => ticket.id === ticketId);

  if (!ticketDetail) {
    return <div>Ticket Not Found</div>;
  }

  return (
    <div>
      <h2>TicketPage</h2>

      <div className="flex gap-2 items-center">
        <h4 className="font-bold text-xl">{ticketDetail.title}</h4>
        <span className="text-md font-semibold">
          {TICKET_ICONS[ticketDetail.status]}
        </span>
      </div>
      <p>{ticketDetail.description}</p>
    </div>
  );
};

export default TicketPage;
