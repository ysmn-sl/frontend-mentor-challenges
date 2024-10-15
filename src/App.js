import Home from "./pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ProductListWithCartPage from "./challenges/product-list-with-cart";
import MortgageRepaymentCalculatorPage from "./challenges/mortgage-repayment-calculator";
import ResultSummaryPage from "./challenges/result-summary";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/challenges/results-summary"
            element={<ResultSummaryPage />}
          />
          <Route
            path="/challenges/product-list-with-cart"
            element={<ProductListWithCartPage />}
          />
          <Route
            path="/challenges/mortgage-repayment-calculator"
            element={<MortgageRepaymentCalculatorPage />}
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
