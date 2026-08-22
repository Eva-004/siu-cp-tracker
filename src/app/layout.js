import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/shared/Navbar";
import Sidebar from "@/components/shared/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SIU CP Tracker",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
       <ThemeProvider attribute="class"
          defaultTheme="light"
          enableSystem={false}>
        
            <Navbar />
            <div className="mx-auto flex w-full max-w-[1600px] flex-1">
              <Sidebar />
              <main className="flex-1 p-4 md:p-6">{children}</main>
            </div>
          
       </ThemeProvider>
        </body>
    </html>
  );
}
