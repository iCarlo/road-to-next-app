import Link from "next/link";
import { PiKanbanFill } from "react-icons/pi";
import { Button, buttonVariants } from "@/components/ui/button";
import { homePath, ticketsPath } from "@/utils/paths";
import { ThemeSwitcher } from "./theme/theme-switcher";

export const Header = () => {
  return (
    <nav className="supports-backdrop-blue:bg-background/60 fixed left-0 right-0 top-0 z-20 border-b bg-background/95 backdrop-blur w-full flex py-2.5 px-5 justify-between items-center">
      <div>
        <Button asChild variant="ghost">
          <Link href={homePath}>
            <PiKanbanFill />
            <h1 className="text-lg font-semibold ml-2">TicketBounty</h1>
          </Link>
        </Button>
      </div>
      <div className="flex items-center gap-1">
        <ThemeSwitcher />
        <Link
          className={buttonVariants({
            variant: "default",
          })}
          href={ticketsPath}
        >
          Tickets
        </Link>
      </div>
    </nav>
  );
};
