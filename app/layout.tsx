import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactQueryProvider } from "@/lib/QueryClientProvider";
import { ThemeProvider } from "@/lib/ThemeProvider";
import { ConvexClientProvider } from "@/lib/ConvexProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TeamWiki",
  description:
    "TeamWiki is a application that can serve as a central wikipedia to store information for a company or individual. ",
  icons: {
    // TODO: Show different favicons based on the user's color scheme preference
    icon: [
      {
        media: "(prefers-color-scheme: dark)",
        url: "logo.svg",
        href: "/logo.svg",
      },
      {
        media: "(prefers-color-scheme: light)",
        url: "logo.svg",
        href: "logo.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ConvexClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ReactQueryProvider>{children}</ReactQueryProvider>
          </ThemeProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
