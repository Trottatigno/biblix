import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRoutes from "./routes/Routes";
import { FavoritesProvider } from "./contexts/FavoritesContext";
import { ReviewsProvider } from "./contexts/ReviewsContext";

function App() {
  return (
    <FavoritesProvider>
      <Header />
      <ReviewsProvider>
        <main>
          <AppRoutes />
        </main>
      </ReviewsProvider>
      <Footer />
    </FavoritesProvider>
  );
}

export default App;
