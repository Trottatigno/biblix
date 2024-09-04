import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRoutes from "./routes/Routes";
import { FavoritesProvider } from "./contexts/FavoritesContext";
import { BooksProvider } from "./contexts/BooksContext";
import { ModalProvider } from "./contexts/ModalContext";

function App() {
  return (
    <BooksProvider>
      <FavoritesProvider>
        <Header />
        <ModalProvider>
          <main>
            <AppRoutes />
          </main>
        </ModalProvider>
        <Footer />
      </FavoritesProvider>
    </BooksProvider>
  );
}

export default App;
