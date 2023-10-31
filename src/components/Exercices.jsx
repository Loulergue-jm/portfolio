import { useTranslation } from "react-i18next";

const Exercices = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className="card-container">
        <div className="card my-border mb-3" style={{ maxWidth: "18rem" }}>
          <div className="card-header bg-transparent my-border">Exercice 1</div>
          <div className="card-body my-border">
            <h5 className="card-title">{t("video")} </h5>
            <p className="card-text">{t("exo1-description")}</p>
          </div>
          <div className="card-footer bg-transparent my-border">
            {" "}
            {t("copyright")}
          </div>
        </div>
        <div className="card my-border mb-3" style={{ maxWidth: "18rem" }}>
          <div className="card-header bg-transparent my-border">Exercice 2</div>
          <div className="card-body my-border">
            <h5 className="card-title">{t("notepad")}</h5>
            <p className="card-text">{t("exo2-description")}</p>
          </div>
          <div className="card-footer bg-transparent my-border">
            {t("copyright")}
          </div>
        </div>
        <div className="card my-border mb-3" style={{ maxWidth: "18rem" }}>
          <div className="card-header bg-transparent my-border">Exercice 3</div>
          <div className="card-body my-border">
            <h5 className="card-title">{t("router")}</h5>
            <p className="card-text">{t("exo3-description")}</p>
          </div>
          <div className="card-footer bg-transparent my-border">
            {t("copyright")}
          </div>
        </div>
      </div>
    </>
  );
};
export default Exercices;
