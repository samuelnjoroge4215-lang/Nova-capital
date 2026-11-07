import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nova Capital | Trade Your Potential",
  description: "A modern proprietary trading evaluation concept by Nova Capital."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}