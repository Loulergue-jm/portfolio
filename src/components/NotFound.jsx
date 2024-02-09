import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <br></br>
      <br></br>
      <h2 className="not-found">{t("route")} </h2>
    </>
  );
};
export default NotFound;
