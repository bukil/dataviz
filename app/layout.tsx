import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400","500","600","700"],
});

export const metadata: Metadata = {
  title: "Dataviz Dashboard",
  description: "Interactive data visualization sandbox",
  keywords: ["data visualization", "charts", "dashboard", "Next.js"],
  authors: [{ name: "Dataviz" }],
  openGraph: {
    title: "Dataviz Dashboard",
    description: "Interactive data visualization sandbox",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased flex flex-col min-h-screen bg-black text-white`}
      >
        <div className="flex-1 w-full">
          {children}
        </div>
        <footer className="w-full mt-16 border-t border-white/10 py-6 text-center text-xs leading-relaxed px-4">
          <p className="text-white/70">
            <a href="https://bukil.github.io/dataviz/" className="underline hover:text-white">Data Vizualisation LHC</a>
            {" "}© 2025 by{" "}
            <a href="https://creativecommons.org" className="underline hover:text-white">Mukil Kumar</a>{" "}
            is licensed under{" "}
            <a href="https://creativecommons.org/licenses/by/4.0/" className="underline hover:text-white">Creative Commons Attribution 4.0 International</a>
            <span className="inline-flex items-center ml-1 align-middle">
              <img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" alt="CC" className="w-4 h-4 ml-1 inline-block opacity-80" />
              <img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" alt="BY" className="w-4 h-4 ml-1 inline-block opacity-80" />
            </span>
          </p>
        </footer>
      </body>
    </html>
  );
}
