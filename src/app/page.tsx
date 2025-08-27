import Link from "next/link";
import { Heading } from "@/components/heading";
import { ticketsPath } from "@/utils/paths";

const HomePage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading
        title="Road To Next App by Carlo"
        description="Your journey starts here"
      />

      <div className="flex-1 flex flex-col items-center">
        <Link href={ticketsPath} className="underline">
          Go to Tickets
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
