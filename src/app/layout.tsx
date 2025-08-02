// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Inter, Poppins, Montserrat } from "next/font/google";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins"
});

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat"
});

export const metadata = {
  title: "FormuHire - AI Resume Builder",
  description: "Tailor your resume with AI for better job success.",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${montserrat.variable}`}>
      <body className="font-montserrat">
        {children}
      </body>
    </html>
  );
}
