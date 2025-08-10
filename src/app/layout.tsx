import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { ThemeProvider } from "next-themes";
import ScrollToTop from "@/components/ScrollToTop";
import SmoothScrollProvider from "@/components/Common/SmoothScrollProvider";
import { Metadata } from "next";

const font = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], });

export const metadata: Metadata = {
  title: "St George High School - Excellence in Education",
  description: "St George High School provides quality education with modern facilities, experienced faculty, and comprehensive academic programs for students.",
  keywords: "St George High School, education, school, academics, students, learning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className} smooth-scroll`}>
        <ThemeProvider
          attribute="class"
          enableSystem={true}
          defaultTheme="light"
        >
          <SmoothScrollProvider />
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
