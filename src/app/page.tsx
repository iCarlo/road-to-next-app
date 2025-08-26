import Link from "next/link";
import { ticketsPath } from "@/utils/paths";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Road To Next App by Carlo</h1>
      <Link href={ticketsPath}>Go to Tickets</Link>
    </div>
  );
}
