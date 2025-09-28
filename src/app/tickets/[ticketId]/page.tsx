import { notFound } from "next/navigation";
import React from "react";
import { TicketItem } from "@/features/ticket/components/ticket-item";
import { getTicket } from "@/features/ticket/queries/get-ticket";

interface TicketPageProps {
  params: Promise<{
    ticketId: string;
  }>;
}

const TicketPage = async ({ params }: TicketPageProps) => {
  const { ticketId } = await params;

  const ticketDetail = await getTicket(ticketId);

  if (!ticketDetail) {
    notFound();
  }

  return (
    <div className="flex justify-center animate-fade-in-from-top">
      <TicketItem ticket={ticketDetail} isDetail />
    </div>
  );
};

export default TicketPage;
