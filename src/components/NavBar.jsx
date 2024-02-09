import { Link } from "react-router-dom";
import ReactSwitch from "react-switch";
import { useContext } from "react";
import { ThemeContext } from "../App";
import { LanguageContext } from "../App";
import { useTranslation } from "react-i18next";

function Navbar() {
  const myTheme = useContext(ThemeContext);
  const myLang = useContext(LanguageContext);

  const { t, i18n } = useTranslation();

  return (
    <div className="nav align underline">
      <h1 className="navbar-brand mx-2">{t("brand")}</h1>
      <button className="nav-button">
        <Link to="/">{t("Home")}</Link>
      </button>
      <button className="nav-button">
        <Link to="/About">{t("About")}</Link>
      </button>
      <button className="nav-button">
        <Link to="/Contact">{t("Contact")}</Link>
      </button>
      <button className="nav-button">
        <Link to="/Works">{t("Works")}</Link>
      </button>
      <div className="switch nav">
        <label>{myTheme.theme === "light" ? t("Dark") : t("Light")}</label>
        <ReactSwitch
          onChange={myTheme.toggleTheme}
          checked={myTheme.theme === "dark"}
        />
        <label>{myLang.lng === "fr" ? "EN" : "FR"}</label>
        <ReactSwitch
          onChange={myLang.toggleLng}
          checked={myLang.lng === "en"}
        />
      </div>
    </div>
  );
}

export default Navbar;
