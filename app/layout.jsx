import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Believe Fitness",
  description: "Train like a pro",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable} antialiased font-inter`}
      >
        {children}
        <ToastContainer position="bottom-right" hideProgressBar={true} pauseOnHover={false} autoClose={3000} closeButton={false} />
      </body>
    </html>
  );
}
