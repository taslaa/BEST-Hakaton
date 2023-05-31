import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import toastify from "../../../../utils/toastify/toastify";
import { useTranslation } from "react-i18next";
import DeviceTypesService from "../../../../data/services/DeviceTypesService";
import _debounce from "debounce";
import DevicesService from "../../../../data/services/DevicesService";

export default function DevicePage() {
    const [devices, setDevices] = useState();

    const navigate = useNavigate();

    const fetchDevice = async () => {
        const devicesList = await DevicesService.getByParams();
        console.log(devicesList);
        setDevices(devicesList);
    }

    useEffect(() => {
        fetchDevice();
    }, []);

    const deleteDevice = async (id) => {
        const deleted = await DevicesService.delete(id);
        if (deleted) {
            const currentDevice = [...devices];
            const index = currentDevice.findIndex((v) => v.id === id);
            currentDevice.splice(index, 1);
            setDevices(currentDevice);
            toastify.success("Successfully deleted device");
        } else {
            toastify.error("Error deleting device");
        }
    };



    return (
        <>
            <div className="row">
                <div className="col-12 mb-4 mb-sm-4">
                    <div className="d-sm-flex justify-content-between align-items-center">
                        <h1 className="h3 mb-3 mb-sm-0">Devices</h1>
                        <div className="d-grid">
                            <a href="#" className="btn btn-primary-soft" onClick={() => navigate("create")}>
                                + Add Device
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {(!devices || devices.length === 0) && (
                    <div className="col">
                        <div className="card shadow h-100">
                            <div className="card-body text-center">
                                No results
                            </div>
                        </div>
                    </div>
                )}
                {devices && devices.map((device, index) => (
                    <div key={index} className="col">
                        <div className="card shadow h-100">
                            <img src={`data:image/png;base64,${device.devicePhoto}`} className="card-img-top" alt="Device Photo" />
                            <div className="card-body">
                                <h5 className="card-title">{device.description}</h5>
                                <p className="card-text">{device.deviceType}</p>
                                <p className="card-text">{device.room}</p>
                                <div className="col-auto text-end">
                                    <button className="btn btn-sm btn-light me-2" onClick={() => navigate(`/homes/rooms/devices/actions/${device.id}`)}>
                                        Add Action
                                    </button>
                                    <button className="btn btn-sm btn-danger" onClick={() => deleteDevice(device.id)}>
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </>
    );
}
