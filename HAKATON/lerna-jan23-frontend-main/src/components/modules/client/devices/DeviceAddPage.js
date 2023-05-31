import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import DevicesService from "../../../../data/services/DevicesService";
import DeviceTypesService from "../../../../data/services/DeviceTypesService";
import RoomsService from "../../../../data/services/RoomsService";
import toastify from "../../../../utils/toastify/toastify";
import pako from 'pako';

export default function DeviceAddPage() {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const [devices, setDevices] = useState();
    const [deviceTypes, setDeviceTypes] = useState();
    const [rooms, setRooms] = useState();
    const [isFormSubmitting, setFormSubmitting] = useState(false);
    const navigate = useNavigate();
    const [photo, setPhoto] = useState("");

    useEffect(() => {
        const fetchAndSetDeviceType = async () => {
            const typesList = await DeviceTypesService.getByParams();
            setDeviceTypes(typesList);
        };
        const fetchRooms = async () => {
            const roomsList = await RoomsService.getByParams();
            setRooms(roomsList);
        }
        fetchAndSetDeviceType();
        fetchRooms();
    }, []);

    const onSubmit = async (data) => {
        setFormSubmitting(true);
        if (data.devicePhoto.length === 0) {
            data.devicePhoto = null;
        } else {
            console.log(photo);
            data.devicePhoto = photo;
        }
        const newDevice = await DevicesService.add(data);
        console.log(newDevice);
        setFormSubmitting(false);
        if (newDevice) {
            navigate(`/devices`);
            toastify.success("Successfully added device");
        } else {
            toastify.error("Error adding device");
        }
    };

    const onSelectedNewFile = (event) => {
        const file = event.target.files[0];

        const reader = new FileReader();
        reader.onloadend = () => {
            const base64String = reader.result.replace("data:", "").replace(/^.+,/, "");
            setPhoto(base64String); // set the photo state to the base64 encoded string
        };
        reader.readAsDataURL(file);
    };

    // const onSelectedNewFile = (event) => {
    //     const file = event.target.files[0];

    //     const reader = new FileReader();
    //     reader.onloadend = () => {
    //       const base64String = reader.result.replace("data:", "").replace(/^.+,/, "");

    //       // Compress the base64 string using gzip
    //       const compressed = pako.gzip(base64String, { level: 9 });

    //       // Convert the compressed data to a base64-encoded string
    //       const compressedBase64 = btoa(String.fromCharCode.apply(null, compressed));

    //       setPhoto(compressedBase64);
    //     };
    //     reader.readAsDataURL(file);
    //   };

    return (
        <>
            <div className="row">
                <div className="col-12 mb-4 mb-sm-5">
                    <h1 className="h3 mb-0">New Device</h1>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="card shadow">
                    <div className="card-header border-bottom">
                        <h5 className="card-header-title">Device Information</h5>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-3">
                                <label className="form-label">Description</label>
                                <input
                                    {...register("description", {
                                        required: "Description is required",
                                    })}
                                    type="text"
                                    className="form-control"
                                    placeholder="Description"
                                />
                                {errors.description && <span className="text-danger">{errors.description.message}</span>}
                            </div>
                            <div>
                                <form>
                                    <input
                                        {...register("devicePhoto", {
                                            required: "Device photo is required",
                                        })}
                                        type="file"
                                        accept="image/*"
                                        onChange={onSelectedNewFile}
                                    />
                                </form>
                                {photo && <img src={`data:image/png;base64,${photo}`} alt="Selected Photo" />}
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Device Type</label>

                                <select
                                    {...register("deviceTypeId", {
                                        required: "Device type is required ",
                                    })}
                                    className="form-control"
                                >
                                    <option value="">Choose device type</option>
                                    {deviceTypes &&
                                        deviceTypes.map((deviceType, index) => (
                                            <option key={index} value={deviceType.id}>
                                                {deviceType.name}
                                            </option>
                                        ))}
                                </select>
                                {errors.deviceTypeId && <span className="text-danger">{errors.deviceTypeId.message}</span>}
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Room</label>

                                <select
                                    {...register("roomId", {
                                        required: "Device type is required ",
                                    })}
                                    className="form-control"
                                >
                                    <option value="">Choose room</option>
                                    {rooms &&
                                        rooms.map((room, index) => (
                                            <option key={index} value={room.id}>
                                                {room.name}
                                            </option>
                                        ))}
                                </select>
                                {errors.roomId && <span className="text-danger">{errors.roomId.message}</span>}
                            </div>
                            <div className="d-flex justify-content-end mt-4">
                                <button className="btn text-secondary border-0 me-2" onClick={() => navigate("/devices")}>
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
