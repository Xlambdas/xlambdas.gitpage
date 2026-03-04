import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AccessibilityPage } from './components/pages/Acessibility';
// import { Header } from './components/ui'
import { ThemeProvider } from './context/themeContext'
import { Home } from './components/pages/Home';

function App() {
    return (
      <Router>
        <ThemeProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/accessibility" element={<AccessibilityPage />} />
          </Routes>
        </ThemeProvider>
      </Router>
    )
}

export default App
