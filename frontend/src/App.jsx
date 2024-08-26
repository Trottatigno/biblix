import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRoutes from "./routes/Routes";

function App() {
  return (
    <div>
      <Header />
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
