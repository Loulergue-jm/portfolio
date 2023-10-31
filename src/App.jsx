import { createContext, useState, Suspense, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Works from "./pages/Works/Works";
import Navbar from "./components/NavBar";
import Exercices from "./components/Exercices";
import CaseStudy from "./components/CaseStudy";
import ConcreteCase from "./components/ConcreteCase";
import NotFound from "./components/NotFound";
import * as i18n from "./i18n";
import { useTranslation } from "react-i18next";

export const ThemeContext = createContext(null);
export const LanguageContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  const [lng, setLng] = useState("en");
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(lng);
  }, [lng, i18n]);

  const toggleLng = () => {
    setLng((lng) => (lng === "en" ? "fr" : "en"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme} className="main">
        <BrowserRouter>
          <Suspense fallback="Loading...">
            <LanguageContext.Provider value={{ lng, toggleLng, t, i18n }}>
              <Navbar />
              <main>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/works">
                    <Route index element={<Works />} />
                    <Route path="exercices" element={<Exercices />} />
                    <Route path="concretcase" element={<ConcreteCase />} />
                    <Route path="casestudy" element={<CaseStudy />} />
                  </Route>
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
            </LanguageContext.Provider>
          </Suspense>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
