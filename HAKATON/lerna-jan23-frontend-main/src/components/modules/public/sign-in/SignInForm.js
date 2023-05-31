import React, { useState } from "react";
import { useForm } from "react-hook-form";
import AuthService from "../../../../data/services/AuthService";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useTranslation } from "react-i18next";

export default function SignInForm() {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const togglePasswordVisibility = (e) => {
    setPasswordVisibility((previousVisibility) => !previousVisibility);
  };
  const [serverError, setServerError] = useState("");
  const [isFormSubmitting, setFormSubmitting] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleSuccessfullFormSubmit = async (data) => {
    setFormSubmitting(true);
    const token = await AuthService.signIn(data.username, data.password);
    setFormSubmitting(false);
    if (token) {
      setServerError("");
      const decodedToken = jwt_decode(token);
      if (decodedToken && decodedToken.Role === "Administrator") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } else {
      setServerError(t("WROND_CREDENTIALS"));
    }
  };

  return (
    <form onSubmit={handleSubmit(handleSuccessfullFormSubmit)} className="mt-4 text-start">
      <div className="mb-3">
        <label className="form-label">{t("EMAIL")}</label>
        <input {...register("username", { required: t("EMAIL_IS_REQUIRED") })} className="form-control" />
        {errors.username && <small className="text-danger">{errors.username.message}</small>}
      </div>
      <div className="mb-3 position-relative">
        <label className="form-label">{t("PASSWORD")}</label>
        <input
          {...register("password", {
            required: t("PASSWORD_IS_REQUIRED"),
            minLength: {
              value: 4,
              message: t("PASSWORD_MIN_LENGTH", { length: 4 }),
            },
          })}
          className="form-control fakepassword"
          type={passwordVisibility ? "text" : "password"}
        />
        <span onClick={togglePasswordVisibility} className="position-absolute top-50 end-0 translate-middle-y p-0 mt-3">
          <i className="fakepasswordicon fas fa-eye-slash cursor-pointer p-2"></i>
        </span>
        {errors.password && <small className="text-danger">{errors.password.message}</small>}
      </div>
      {serverError && <small className="text-danger">{serverError}</small>}
      <div>
        <button disabled={isFormSubmitting} type="submit" className="btn btn-primary w-100 mb-0 mt-2">
          {isFormSubmitting && <i className="fa fa-spin fa-spinner"></i>}
          <span> {t("SIGN_IN")}</span>
        </button>
      </div>
    </form>
  );
}
