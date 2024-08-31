import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRoutes from "./routes/Routes";
import { FavoritesProvider } from "./contexts/FavoritesContext";

function App() {
  return (
    <FavoritesProvider>
      <Header />
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </FavoritesProvider>
  );
}

export default App;
