// src/App.tsx
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AccessibilityPage } from './pages/accessibility/AcessibilityPage';
import { Home } from './components/Home/Home';

function App() {
    return (
      <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/accessibility" element={<AccessibilityPage />} />
          </Routes>
      </Router>
    )
}

export default App
