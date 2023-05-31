import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import DeviceTypesService from "../../../../data/services/DeviceTypesService";
import toastify from "../../../../utils/toastify/toastify";

export default function DeviceTypeAddPage() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [isFormSubmitting, setFormSubmitting] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setFormSubmitting(true);
    const newDeviceType = await DeviceTypesService.add(data);
    setFormSubmitting(false);
    if (newDeviceType) {
      navigate("/admin/deviceTypes");
      toastify.success("Successfully added device type");
    } else {
      toastify.error("Error adding device type");
    }
  };
  return (
    <>
      <div className="row">
        <div className="col-12 mb-4 mb-sm-5">
          <h1 className="h3 mb-0">New Device Type</h1>
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
