import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRoutes from "./routes/Routes";
import { FavoritesProvider } from "./contexts/FavoritesContext";
import { BooksProvider } from "./contexts/BooksContext";

function App() {
  return (
    <BooksProvider>
      <FavoritesProvider>
        <Header />
        <main>
          <AppRoutes />
        </main>
        <Footer />
      </FavoritesProvider>
    </BooksProvider>
  );
}

export default App;
