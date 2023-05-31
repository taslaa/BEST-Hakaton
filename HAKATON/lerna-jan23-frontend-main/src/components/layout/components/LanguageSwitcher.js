import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
  };

  const getCurrentLanguageIconPath = () => {
    switch (i18n.language) {
      case "en":
        return "/assets/images/flags/us.svg";
      case "de":
        return "/assets/images/flags/gr.svg";
    }
  };

  return (
    <li className="nav-item dropdown ms-3">
      <button className="nav-notification lh-0 btn btn-light p-0 mb-0" id="bd-theme" type="button" aria-expanded="false" data-bs-toggle="dropdown" data-bs-display="static">
        <img src={getCurrentLanguageIconPath()} width="16" />
      </button>

      <ul className="dropdown-menu min-w-auto dropdown-menu-end" aria-labelledby="bd-theme">
        <li className="mb-1">
          <button onClick={() => changeLanguage("en")} type="button" className={`dropdown-item d-flex align-items-center me-3 ${i18n.language === "en" ? "active" : ""}`} data-bs-theme-value="light">
            <img src="/assets/images/flags/us.svg" width="16" className="me-2" />
            English
          </button>
        </li>
        <li className="mb-1">
          <button onClick={() => changeLanguage("de")} type="button" className={`dropdown-item d-flex align-items-center me-3 ${i18n.language === "de" ? "active" : ""}`} data-bs-theme-value="dark">
            <img src="/assets/images/flags/gr.svg" width="16" className="me-2" />
            German
          </button>
        </li>
      </ul>
    </li>
  );
}
