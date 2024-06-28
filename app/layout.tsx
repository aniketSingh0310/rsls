import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import "./globals.css";
import ScrollNavbar from "@/components/ScrollNavbar";
import Footer from "@/components/footer";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const myFont = localFont({
  src: "../font/pilat.woff2",
  display: "swap",
});
export const metadata: Metadata = {
  title: "Reality Shipping And Logistics Services",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "flex flex-col justify-between min-h-screen",
          raleway.className
        )}
      >
        {/* <ScrollNavbar/> */}
        {/* <Navbar/> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
