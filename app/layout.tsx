import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { Rocket } from "lucide-react";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ISB : Indian Startup Business",
  description: "Empowering Indian Startups with Innovative Solutions",
  keywords: [
    "Indian Startup Ecosystem",
    "Startup Business Solutions",
    "Indian Startup Business",
    "Startup Consulting India",
    "Web Development Mumbai",
    "Mobile App Development India",
    "UI/UX Design Services",
    "Digital Transformation India",
    "SaaS Development",
    "MVP Development",
    "Startup Technology Solutions",
    "Business Scalability",
    "Entrepreneurship Support",
    "Indian Tech Innovation",
  ].join(", "),
  icons: {
    icon: "/icon/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
