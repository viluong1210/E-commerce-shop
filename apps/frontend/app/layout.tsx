import Providers from "@/components/layout/providers";

import "@uploadthing/react/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";
import { ReactQueryClientProvider } from "@/queryClient";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Shadcn",
  description: "Basic dashboard with Next.js and Shadcn",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <ReactQueryClientProvider>
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} overflow-auto`}>
      
        <Providers session={session}>
            <ToastContainer />
          {children}
          </Providers>
         
      </body>
      </html>
      </ReactQueryClientProvider>
  );
}
