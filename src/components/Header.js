import { useState } from "react";
import { Link } from "react-router-dom";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";
export default function Header() {
  const [locale, setLocale] = useState(i18n.language);
  const { t } = useTranslation();

  i18n.on("languageChanged", (lng) => setLocale(i18n.language));

  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div
      style={{
        height: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#eee",
        padding: "0 50px"
      }}
    >
      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/">{t("nav1")}</Link>
        <Link to="/currency">{t("nav2")}</Link>
      </div>
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <p>{t("lngInstruction")}</p>
        <select value={locale} onChange={handleChange}>
          <option value="en">En- English</option>
          {/* <option value="it">It- Italian</option> */}
          <option value="hn">Hn- Hindi</option>
          <option value="ar">Ar- Arebic</option>
          <option value="fr">Fr- French</option>
        </select>
      </div>
    </div>
  );
}
