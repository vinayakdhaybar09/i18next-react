import Header from "../components/Header";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t, i18n } = useTranslation();
  console.log(i18n.language);
  return (
    <div>
      <Header />
      <br />
      <br />
      <p className={i18n.language == "ar" ? "alignment" : null}>
        <i>{t("language")}</i>
      </p>
      <h1 className={i18n.language == "ar" ? "alignment" : null}>
        {t("welcome")}
      </h1>
      <br />
      <h3 className={i18n.language == "ar" ? "alignment" : null}>
        {t("i18nTitle")}
      </h3>
      <p className={i18n.language == "ar" ? "alignment" : null}>{t("i18n")}</p>

      <h3 className={i18n.language == "ar" ? "alignment" : null}>
        {t("i10nTitle")}
      </h3>
      <p className={i18n.language == "ar" ? "alignment" : null}>{t("i10n")}</p>
      <br />
      <p>
        The primary purpose of i18next is to provide support for
        internationalization (i18n) and localization (l10n) in your application.
        Internationalization involves adapting your software to different
        languages and regions, while localization focuses on adapting it to a
        specific region or locale.
      </p>
    </div>
  );
}
