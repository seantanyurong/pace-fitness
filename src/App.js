import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Banner from "./components/layout/General/Banner";
import Header from "./components/layout/General/Header";
import Footer from "./components/layout/General/Footer";

function App() {
  return (
    <main>
      <Banner />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
