import { useTranslation } from "react-i18next";

const Home = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <h1>{t("home1")} </h1>
      <h1>{t("home2")} </h1>
      <h1>{t("home3")} </h1>
    </>
  );
};
export default Home;
