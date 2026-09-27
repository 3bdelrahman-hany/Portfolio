import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import ScrollUp from '../components/ScrollUp';
import Home from '../components/Pages/Home/Home';
import Footer from '../components/Footer';
import Contacts from '../components/Pages/Contacts/Contacts';
import './App.css';

function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (isDark) {
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
    }
    localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <div className="app">
      <BrowserRouter>
        <Header isDark={isDark} toggleTheme={toggleTheme} />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home isDark={isDark} />} />
            <Route path="/Contacts" element={<Contacts isDark={isDark} />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
      <ScrollUp />
    </div>
  );
}

export default App;
