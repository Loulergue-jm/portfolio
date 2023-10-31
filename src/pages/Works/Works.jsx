import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Works = () => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <h1>{t("welcome-work1")} </h1>
      <h1>{t("welcome-work2")}</h1>
      <button className="body-button">
        <Link to="/Works/exercices">Exercices</Link>
      </button>
      <button className="body-button">
        <Link to="/Works/casestudy">{t("case-study")}</Link>
      </button>
      <button className="body-button">
        <Link to="/Works/concretcase">{t("concret-case")} </Link>
      </button>
    </div>
  );
};
export default Works;
