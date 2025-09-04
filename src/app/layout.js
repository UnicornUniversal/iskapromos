import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Poppins } from "next/font/google";

import Nav from "./components/Nav";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});



export const metadata = {
  title: "Iska Promo Page",
  description: "Iska Promo Page",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`font-poppins  ${poppins.variable} antialiased`}
      >
        <Nav />
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
