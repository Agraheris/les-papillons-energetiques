import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './globals.css';

export const metadata = {
  title: "Le papillon énergétique",
  description: "L'objectif? Vous libérer de ces blocages pour retrouver un état de mieux-être, plus de sérénité et une motivation renouvelée.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        <main>{children}</main> 
        <Footer />
      </body>
    </html>
  );
}
