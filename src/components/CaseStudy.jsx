import { useTranslation } from "react-i18next";

const CaseStudy = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className="card-container">
        <div className="card my-border mb-3" style={{ maxWidth: "18rem" }}>
          <div className="card-header bg-transparent my-border">Exercice 1</div>
          <div className="card-body my-border">
            <h5 className="card-title">{t("nike")} </h5>
            <p className="card-text">{t("nike-description")}</p>
          </div>
          <div className="card-footer bg-transparent my-border">
            {t("copyright")}
          </div>
        </div>
        <div className="card my-border mb-3" style={{ maxWidth: "18rem" }}>
          <div className="card-header bg-transparent my-border">Exercice 2</div>
          <div className="card-body my-border">
            <h5 className="card-title">{t("paypal")} </h5>
            <p className="card-text">{t("paypal-description")}</p>
          </div>
          <div className="card-footer bg-transparent my-border">
            {t("copyright")}
          </div>
        </div>
      </div>
    </>
  );
};
export default CaseStudy;
