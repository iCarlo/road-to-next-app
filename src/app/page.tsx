import Link from "next/link";
import { ticketsPath } from "@/utils/paths";

const HomePage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Road To Next App by Carlo
        </h1>
        <p className="text-sm text-muted-foreground">
          Your journey starts here
        </p>
      </div>

      <div className="flex-1 flex flex-col items-center">
        <Link href={ticketsPath} className="underline">
          Go to Tickets
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
