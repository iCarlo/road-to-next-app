import Link from "next/link";
import React from "react";
import { Placeholder } from "@/components/placeholder";
import { Button } from "@/components/ui/button";
import { ticketsPath } from "@/utils/paths";

const NotFound = () => {
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
};

export default NotFound;
