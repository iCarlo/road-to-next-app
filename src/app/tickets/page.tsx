import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { CardWrapper } from "@/components/card-wrapper";
import { Heading } from "@/components/heading";
import { Placeholder } from "@/components/placeholder";
import Spinner from "@/components/spinner";
import TicketList from "@/features/ticket/components/ticket-list";
import { TicketUpsertForm } from "@/features/ticket/components/ticket-upsert-form";

// export const dynamic = "force-dynamic";
// export const revalidate = 30;

const TicketsPage = async () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading
        title="Tickets Page"
        description="All your tickets at one place"
      />

      <CardWrapper
        title="Create Ticket"
        description="A new ticket will be created"
      >
        <TicketUpsertForm />
      </CardWrapper>

      <ErrorBoundary fallback={<Placeholder label="Something went wrong." />}>
        <Suspense fallback={<Spinner />}>
          <TicketList />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default TicketsPage;
