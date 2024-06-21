import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Language Tester",
  description: "Test your language level",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body>
          <main className="w-full h-screen flex justify-center items-center bg-milky-white">
            {children}
          </main>
        </body>
      </ClerkProvider>
    </html>
  );
}
