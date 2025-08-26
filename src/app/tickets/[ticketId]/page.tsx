import React from "react";
import { initialTickets } from "@/data";

interface TicketPageProps {
  params: {
    ticketId: string;
  };
}

const TicketPage = ({ params }: TicketPageProps) => {
  const ticketDetail = initialTickets.find(
    (ticket) => ticket.id === params.ticketId
  );

  if (!ticketDetail) {
    return <div>Ticket Not Found</div>;
  }

  return (
    <div>
      <h2>TicketPage</h2>

      <h4 className="font-bold text-xl">{ticketDetail.title}</h4>
      <p>{ticketDetail.description}</p>
      <span className="text-md font-semibold">{ticketDetail.status}</span>
    </div>
  );
};

export default TicketPage;
