import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import SignUpForm from "./SignUpForm";

export default function SignUpPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <main>
      <section className="vh-xxl-100">
        <div className="container h-100 d-flex px-0 px-sm-4">
          <div className="row justify-content-center align-items-center m-auto">
            <div className="col-12">
              <div className="bg-mode shadow rounded-3 overflow-hidden">
                <div className="row g-0">
                  <div className="col-lg-6 d-flex align-items-center order-2 order-lg-1">
                    <div className="p-3 p-lg-5">
                      <img src="assets/images/element/signin.svg" alt="" />
                    </div>
                    <div className="vr opacity-1 d-none d-lg-block"></div>
                  </div>

                  <div className="col-lg-6 order-1">
                    <div className="p-4 p-sm-7">
                      <a href="index.html">
                        <img className="h-50px mb-4" src="assets/images/logo-icon.svg" alt="logo" />
                      </a>
                      <h1 className="mb-2 h3">{t("CREATE_NEW_ACCOUNT")}</h1>
                      <p className="mb-0">
                        {t("ALREADY_MEMBER")}
                        <a href="#" onClick={() => navigate("/sign-in")}>
                          &nbsp; {t("LOG_IN")}
                        </a>
                      </p>
                      <SignUpForm></SignUpForm>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
