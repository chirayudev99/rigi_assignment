import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Video Player",
  description: "A simple video player app with multiple functionalities and features",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning >
      <body className={inter.className}>{children}</body>
    </html>
  );
}
