import Link from "next/link";
import React from "react";
import { Placeholder } from "@/components/placeholder";
import { Button } from "@/components/ui/button";
import { initialTickets } from "@/data";
import { TicketItem } from "@/features/ticket/ticket-item";
import { ticketsPath } from "@/utils/paths";

interface TicketPageProps {
  params: Promise<{
    ticketId: string;
  }>;
}

const TicketPage = async ({ params }: TicketPageProps) => {
  const { ticketId } = await params;

  const ticketDetail = initialTickets.find((ticket) => ticket.id === ticketId);

  if (!ticketDetail) {
    return (
      <Placeholder
        label="Ticket not found"
        button={
          <Button asChild variant="outline">
            <Link href={ticketsPath}>Go back to tickets</Link>
          </Button>
        }
      />
    );
  }

  return (
    <div className="flex justify-center animate-fade-in-from-top">
      <TicketItem ticket={ticketDetail} isDetail />
    </div>
  );
};

export default TicketPage;
