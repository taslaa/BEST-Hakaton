import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import toastify from "../../../../utils/toastify/toastify";
import { useTranslation } from "react-i18next";
import DeviceTypesService from "../../../../data/services/DeviceTypesService";
import _debounce from "debounce";

export default function DeviceTypePage() {
  const [types, setTypes] = useState();
  const navigate = useNavigate();
  const { t } = useTranslation();

//   useEffect(() => {
//     const fetchAndSetState = async () => {
//       const vehicleBrandsList = await VehicleBrandsService.getByParams(1, 9999);
//       setVehicleBrands(vehicleBrandsList);
//     };
//     fetchAndSetState();
//   }, []);

  const fetchTypes = async (params) => {
    const typesList = await DeviceTypesService.getByParams({ pageNumber: 1, pageSize: 999, ...params });
    setTypes(typesList);
  }

  useEffect(() => {
    fetchTypes();
  }, []);

  const deleteVehicleBrand = async (id) => {
    const deleted = await DeviceTypesService.delete(id);
    if (deleted) {
      const currentDeviceType = [...types];
      const index = currentDeviceType.findIndex((v) => v.id === id);
      currentDeviceType.splice(index, 1);
      setTypes(currentDeviceType);
      toastify.success("Successfully deleted brand type");
    } else {
      toastify.error("Error deleting device type");
    }
  };

  const searchChange = (e) => fetchTypes({ name: e.target.value });

  return (
    <>
      <div className="row">
        <div className="col-12 mb-4 mb-sm-4">
          <div className="d-sm-flex justify-content-between align-items-center">
            <h1 className="h3 mb-3 mb-sm-0">DEVICE TYPES</h1>
            <div className="d-grid">
              <a href="#" className="btn btn-primary-soft" onClick={() => navigate("create")}>
                + New Device Type
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-3">
        <input type="text" class="form-control" placeholder="Search" onChange={_debounce(searchChange, 500)}></input>
      </div>
      <div className="card shadow">
        <div className="card-body pb-0">
          <div className="bg-light rounded p-3 d-none d-lg-block">
            <div className="row row-cols-7 g-4">
              <div className="col">
                <h6 className="mb-0">Name</h6>
              </div>
              <div className="col">
                <h6 className="float-end mb-0">Action</h6>
              </div>
            </div>
          </div>
          {(!types || types.length === 0) && (
            <div className="row row-cols-xl-7 align-items-lg-center border-bottom g-4 px-2 py-4">
              <div className="col text-center">"No results"</div>
            </div>
          )}
          {types && types.map((type, index) => (
              <div key={index} className={`row row-cols-xl-7 align-items-lg-center ${(type.length - 1 !== index) ? "border-bottom" : ""} g-4 px-2 py-3`}>
                <div className="col">
                  <small className="d-block d-lg-none">Name:</small>
                  <h6 className="mb-0 fw-normal">{type.name}</h6>
                </div>

                <div className="col-auto">
                  <button className="btn btn-sm btn-light me-2" onClick={() => navigate(`edit/${type.id}`)}>
                   Edit
                  </button>
                  <button className="btn btn-sm btn-danger" onClick={() => deleteVehicleBrand(type.id)}>
                    Delete
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
