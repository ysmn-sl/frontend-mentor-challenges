import Home from "./pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FirstChallenge from "./challenges/first-challenge/FirstChallenge";
import Layout from "./components/Layout";
import ProductListWithCartPage from "./challenges/product-list-with-cart";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/challenges/first-challenge"
            element={<FirstChallenge />}
          />
          <Route
            path="/challenges/product-list-with-cart"
            element={<ProductListWithCartPage />}
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
