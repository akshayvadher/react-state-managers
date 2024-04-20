import { Open_Sans } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import Link from "next/link";

const openSans = Open_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>React state managers | Akshay Vadher</title>
        <link href="/favicon.ico" rel="shortcut icon" type="image/x-icon" />
      </head>
      <body className={openSans.className}>
        <nav>
          <Link className="p-2 mb-5 hover:underline" href="/">
            Home
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
