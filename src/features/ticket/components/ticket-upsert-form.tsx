import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Ticket } from "@/generated/prisma";
import { upsertTicket } from "../actions/upsert-ticket";

interface TicketUpsertFormProps {
  ticket?: Ticket;
}

export const TicketUpsertForm = ({ ticket }: TicketUpsertFormProps) => {
  return (
    <form
      action={upsertTicket.bind(null, ticket?.id)}
      className="flex flex-col gap-2"
    >
      {/* <Input type="hidden" name="id" id="id" defaultValue={ticket?.id} /> */}

      <Label htmlFor="title">Title</Label>
      <Input type="text" name="title" id="title" defaultValue={ticket?.title} />

      <Label htmlFor="description">Description</Label>
      <Textarea
        name="description"
        id="description"
        defaultValue={ticket?.description}
      />

      <Button type="submit" className="mt-2">
        {!!ticket ? "Edit" : "Create"}
      </Button>
    </form>
  );
};
