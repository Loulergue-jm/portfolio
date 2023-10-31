import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <h1>{t("contact1")} </h1>
      <h2>{t("contact2")} </h2>
      <h2>{t("contact3")} </h2>
    </>
  );
};
export default Contact;
