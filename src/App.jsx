import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import CamperDetailsPage from "./pages/CamperDetailsPage/CamperDetailsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<CamperDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;