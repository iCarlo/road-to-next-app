import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { PiKanbanFill } from "react-icons/pi";
import { Button, buttonVariants } from "@/components/ui/button";
import { homePath, ticketsPath } from "@/utils/paths";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Road To Next App - Carlo",
  description: "This is a masterclass app for Nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="supports-backdrop-blue:bg-background/60 fixed left-0 right-0 top-0 z-20 border-b bg-background/95 backdrop-blur w-full flex py-2.5 px-5 justify-between items-center">
          <div>
            <Button asChild variant="ghost">
              <Link href={homePath}>
                <PiKanbanFill />
                <h1 className="text-lg font-semibold ml-2">TicketBounty</h1>
              </Link>
            </Button>
          </div>
          <div>
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

        <main className="min-h-screen flex-1 overflow-y-auto overflow-x-hidden py-24 px-8 bg-secondary/20 flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
