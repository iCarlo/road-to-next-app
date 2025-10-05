import { notFound } from "next/navigation";
import React from "react";
import { CardWrapper } from "@/components/card-wrapper";
import { TicketUpsertForm } from "@/features/ticket/components/ticket-upsert-form";
import { getTicket } from "@/features/ticket/queries/get-ticket";

interface TicketEditPageProps {
  params: Promise<{
    ticketId: string;
  }>;
}

const TicketEditPage = async ({ params }: TicketEditPageProps) => {
  const { ticketId } = await params;

  const ticketDetail = await getTicket(ticketId);

  if (!ticketDetail) {
    notFound();
  }

  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <CardWrapper
        title="Edit Ticket"
        className="animate-fade-in-from-top"
        description="Edit an existing ticket"
      >
        <TicketUpsertForm ticket={ticketDetail} />
      </CardWrapper>
    </div>
  );
};

export default TicketEditPage;
