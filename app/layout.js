import "./globals.css";
import { Inter } from "next/font/google";
import { Navigation } from "./components/layout/navigation/Navigation";
import { MainContainer } from "./components/layout/mainContainer/MainContainer";
import { Footer } from "./components/layout/footer/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Momo",
  description: "Japanese Language Learning App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={inter.className}>
        <Navigation />
        <MainContainer>{children}</MainContainer>
        <Footer />
      </body>
    </html>
  );
}
