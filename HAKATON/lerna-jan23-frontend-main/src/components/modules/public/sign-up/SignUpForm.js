import React, { useState } from "react";
import { useForm } from "react-hook-form";
import AuthService from "../../../../data/services/AuthService";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import toastify from "../../../../utils/toastify/toastify";

export default function SignUpForm() {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const togglePasswordVisibility = (e) => {
    setPasswordVisibility((previousVisibility) => !previousVisibility);
  };
  const [serverError, setServerError] = useState("");
  const [isFormSubmitting, setFormSubmitting] = useState(false);
  const [photo, setPhoto] = useState("");

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();
  const { t } = useTranslation();

  const onSubmit = async (data) => {
    setFormSubmitting(true);
    const signedUp = await AuthService.signUp(data);
    setFormSubmitting(false);
    if (signedUp) {
      setServerError("");
      toastify.success(t("SUCCESSFULLY_SIGNED_UP"));
      navigate("/sign-in");
    } else {
      setServerError(t("ERROR_SIGNING_UP"));
    }
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-4 text-start">
      <div className="row mb-3">
        <div className="col">
          <label className="form-label">{t("FIRST_NAME")}</label>
          <input {...register("firstName", { required: t("FIRST_NAME_IS_REQUIRED") })} className="form-control" />
          {errors.firstName && <small className="text-danger">{errors.firstName.message}</small>}
        </div>
        <div className="col">
          <label className="form-label">{t("LAST_NAME")}</label>
          <input {...register("lastName", { required: t("LAST_NAME_IS_REQUIRED") })} className="form-control" />
          {errors.lastName && <small className="text-danger">{errors.lastName.message}</small>}
        </div>
      </div>
      <div className="row mb-3">
        <div className="col">
          <label className="form-label">{t("EMAIL")}</label>
          <input type="email" {...register("email", { required: t("EMAIL_IS_REQUIRED") })} className="form-control" />
          {errors.email && <small className="text-danger">{errors.email.message}</small>}
        </div>
        <div className="col">
          <label className="form-label">{t("PHONE_NUMBER")}</label>
          <input type="text" {...register("phoneNumber", { required: t("PHONE_NUMBER_IS_REQUIRED") })} className="form-control" />
          {errors.phoneNumber && <small className="text-danger">{errors.phoneNumber.message}</small>}
        </div>
      </div>
      {/* <!-- Password --> */}
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
          <span> {t("SIGN_UP")}</span>
        </button>
      </div>
    </form>
  );
}
