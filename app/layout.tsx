import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Providers } from "@/components/providers";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CartSheet } from "@/components/cart/cart-sheet";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Modern E-commerce",
  description: "A modern e-commerce platform built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <Providers>
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
              <CartSheet />
            </div>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}