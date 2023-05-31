import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import VehicleBrandsService from "../../../../data/services/VehicleBrandsService";
import toastify from "../../../../utils/toastify/toastify";
import { useTranslation } from "react-i18next";

export default function VehicleBrandsPage() {
  const [vehicleBrands, setVehicleBrands] = useState();
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    const fetchAndSetState = async () => {
      const vehicleBrandsList = await VehicleBrandsService.getByParams(1, 9999);
      setVehicleBrands(vehicleBrandsList);
    };
    fetchAndSetState();
  }, []);

  const deleteVehicleBrand = async (id) => {
    const deleted = await VehicleBrandsService.delete(id);
    if (deleted) {
      const currentVehicleBrands = [...vehicleBrands];
      const index = currentVehicleBrands.findIndex((v) => v.id === id);
      currentVehicleBrands.splice(index, 1);
      setVehicleBrands(currentVehicleBrands);
      toastify.success(t("SUCCESSFULLY_DELETED_VEHICLE_BRAND"));
    } else {
      toastify.error(t("ERROR_DELETING_VEHICLE_BRAND"));
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-12 mb-4 mb-sm-4">
          <div className="d-sm-flex justify-content-between align-items-center">
            <h1 className="h3 mb-3 mb-sm-0">{t("VEHICLE_BRANDS")}</h1>
            <div className="d-grid">
              <a href="#" className="btn btn-primary-soft" onClick={() => navigate("create")}>
                + {t("NEW_VEHICLE_BRAND")}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="card shadow">
        <div className="card-body pb-0">
          <div className="bg-light rounded p-3 d-none d-lg-block">
            <div className="row row-cols-7 g-4">
              <div className="col">
                <h6 className="mb-0">{t("NAME")}</h6>
              </div>
              <div className="col">
                <h6 className="float-end mb-0">{t("ACTION")}</h6>
              </div>
            </div>
          </div>
          {(!vehicleBrands || vehicleBrands.length === 0) && (
            <div className="row row-cols-xl-7 align-items-lg-center border-bottom g-4 px-2 py-4">
              <div className="col text-center">{t("NO_RESULTS")}</div>
            </div>
          )}
          {vehicleBrands && vehicleBrands.map((vehicleBrand, index) => (
              <div key={index} className={`row row-cols-xl-7 align-items-lg-center ${(vehicleBrands.length - 1 !== index) ? "border-bottom" : ""} g-4 px-2 py-3`}>
                <div className="col">
                  <small className="d-block d-lg-none">{t("NAME")}:</small>
                  <h6 className="mb-0 fw-normal">{vehicleBrand.name}</h6>
                </div>

                <div className="col-auto">
                  <button className="btn btn-sm btn-light me-2" onClick={() => navigate(`edit/${vehicleBrand.id}`)}>
                    {t("EDIT")}
                  </button>
                  <button className="btn btn-sm btn-danger" onClick={() => deleteVehicleBrand(vehicleBrand.id)}>
                    {t("DELETE")}
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
