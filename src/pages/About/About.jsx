import { useTranslation } from "react-i18next";

const About = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <h1>{t("about1")}</h1>
      <h1>{t("about2")} </h1>
    </>
  );
};
export default About;
