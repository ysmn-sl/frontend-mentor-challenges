import Home from "./pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FirstChallenge from "./challenges/first-challenge/FirstChallenge";
import Layout from "./components/Layout";

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
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
