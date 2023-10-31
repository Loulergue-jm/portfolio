import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t, i18n } = useTranslation();

  return <h2>{t("route")} </h2>;
};
export default NotFound;
