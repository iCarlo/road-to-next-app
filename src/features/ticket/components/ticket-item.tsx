// "use client";

import { LucideTrash } from "lucide-react";
import Link from "next/link";
import React from "react";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Ticket } from "@/generated/prisma";
import { cn } from "@/lib/utils";
import { ticketPath } from "@/utils/paths";
import { deleteTicket } from "../actions/delete-ticket";
import { TICKET_ICONS } from "../constants";

interface TicketItemProps {
  ticket: Ticket;
  isDetail?: boolean;
}

export const TicketItem = ({ ticket, isDetail }: TicketItemProps) => {
  const detailButton = (
    <Button variant="outline" size="icon" asChild>
      <Link prefetch href={ticketPath(ticket.id)}>
        <LuSquareArrowOutUpRight className="size-4" />
      </Link>
    </Button>
  );

  // client-side server action
  // const handleDeleteTicket = async () => {
  //   await deleteTicket(ticket.id);
  // };

  // const deleteButton = (
  //   <Button variant="outline" size="icon" onClick={handleDeleteTicket}>
  //     <LucideTrash className="size-4" />
  //   </Button>
  // );

  // server-side server action
  const deleteButton = (
    <form action={deleteTicket.bind(null, ticket.id)}>
      <Button variant="outline" size="icon">
        <LucideTrash className="size-4" />
      </Button>
    </form>
  );

  return (
    <div
      className={cn("w-full max-w-[420px] flex gap-x-1", {
        "max-w-[580px]": isDetail,
      })}
    >
      <Card key={ticket.id} className="w-full">
        <CardHeader>
          <CardTitle className="flex gap-x-2">
            <span>{TICKET_ICONS[ticket.status]}</span>
            <span className="truncate">{ticket.title}</span>
          </CardTitle>
        </CardHeader>

        <CardContent>
          <p
            className={cn("whitespace-break-spaces", {
              "line-clamp-3": !isDetail,
            })}
          >
            {ticket.description}
          </p>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-y-1">
        {isDetail ? deleteButton : detailButton}
      </div>
    </div>
  );
};
