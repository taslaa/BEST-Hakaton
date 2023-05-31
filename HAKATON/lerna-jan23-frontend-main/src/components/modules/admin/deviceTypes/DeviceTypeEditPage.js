import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router";
import DeviceTypesService from "../../../../data/services/DeviceTypesService";
import VehicleBrandsService from "../../../../data/services/VehicleBrandsService";
import toastify from "../../../../utils/toastify/toastify";

export default function DeviceTypeEditPage() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const [isFormSubmitting, setFormSubmitting] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchDeviceType = async () => {
      const deviceType = await DeviceTypesService.getById(id);
      if (deviceType) {
        reset(deviceType);
      } else {
        navigate("/admin/deviceTypes");
      }
    };
    fetchDeviceType();
  }, []);

  const onSubmit = async (data) => {
    setFormSubmitting(true);
    const editedDeviceType = await DeviceTypesService.edit({ id: id, ...data });
    setFormSubmitting(false);
    if (editedDeviceType) {
      navigate("/admin/deviceTypes");
      toastify.success("Successfully edited device type");
    } else {
      toastify.error("Error editing device type");
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-12 mb-4 mb-sm-5">
          <h1 className="h3 mb-0">Edit Device Type</h1>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="card shadow">
          <div className="card-header border-bottom">
            <h5 className="card-header-title">Device Type Information</h5>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  {...register("name", {
                    required: "Name is required",
                  })}
                  type="text"
                  className="form-control"
                  placeholder="Name"
                />
                {errors.name && <span className="text-danger">{errors.name.message}</span>}
              </div>
              <div className="d-flex justify-content-end mt-4">
                <button className="btn text-secondary border-0 me-2" onClick={() => navigate("/admin/deviceTypes")}>
                  Discard
                </button>
                <button disabled={isFormSubmitting} type="submit" className="btn btn-primary">
                  {isFormSubmitting && <i className="fa fa-spin fa-spinner"></i>}
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
